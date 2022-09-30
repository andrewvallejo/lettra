import { derived, writable } from 'svelte/store';
import { objectifyWords, splitText, replaceNewlines } from '$lib/words';
import { checkForWordiables, powerWordiables } from '$lib/wordiables';
import type { WordI } from '$types';
import type { Writable } from 'svelte/store';

export const text: Writable<string> = writable('');

export const parsedText = derived(text, ($text): WordI[] => {
	checkForWordiables($text);
	let words = splitText(replaceNewlines($text));
	words = objectifyWords(words);
	powerWordiables(words);
	return words;
});

export const wordiables: Writable<string[]> = writable([]);
