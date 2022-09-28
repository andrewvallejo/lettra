import { derived, writable } from 'svelte/store';
import { objectifyWords, splitText, replaceNewlines } from '$lib/words';
import { checkForWordiables } from '$lib/wordiables';
import type { WordI } from '$types';
import type { Writable } from 'svelte/store';

export const text: Writable<string> = writable('');

export const parsedText = derived(text, ($text): WordI[] => {
	checkForWordiables($text);
	const words = splitText(replaceNewlines($text));
	return objectifyWords(words);
});

export const wordiables: Writable<string[]> = writable([]);

export const isSync: Writable<boolean> = writable(true);
