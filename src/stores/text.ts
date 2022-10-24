import { derived, writable } from 'svelte/store';
import type { Readable, Writable } from 'svelte/store';
import { words } from './words';
import { objectifyWords, powerWordiables } from '$lib/editor';
import type { Words } from '$types';
import { replaceNewlines } from '$lib/strings';

export const text: Writable<string> = writable('');

export const cleanText: Readable<string[]> = derived(text, ($text) => {
	return replaceNewlines($text);
});

export const wordiables = derived(words, ($words): Words => {
	const wordiables = $words.filter((word) => word.isWordiable);
	const uniqueWordiables = wordiables.filter(
		(word, index, self) => index === self.findIndex((w) => w.string === word.string)
	);
	return uniqueWordiables;
});

export const parsedText = derived([cleanText, wordiables], ([$cleanText, $wordiables]) => {
	const stringifiedWords = $wordiables.map((word) => word.string);
	const upgradedWords = objectifyWords($cleanText, stringifiedWords);
	powerWordiables(upgradedWords, stringifiedWords);
	return upgradedWords;
});
