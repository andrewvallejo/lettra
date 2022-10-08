import { objectifyWords, powerWordiables } from '$lib/editor';
import { replaceNewlines } from '$lib/strings';
import type { Readable, Writable } from 'svelte/store';
import { derived, writable } from 'svelte/store';
import { words } from './words';

export const text: Writable<string> = writable('');

export const cleanText: Readable<string[]> = derived(text, ($text) => {
	return replaceNewlines($text);
});

export const wordiableDraft = derived(words, ($words) => {
	const wordiables = $words.filter((word) => word.isWordiable).map((word) => word.string);
	return [...new Set(wordiables)];
});

export const parsedText = derived([cleanText, wordiableDraft], ([$cleanText, $wordiableDraft]) => {
	const upgradedWords = objectifyWords($cleanText, $wordiableDraft);
	powerWordiables(upgradedWords, $wordiableDraft);
	return upgradedWords;
});
