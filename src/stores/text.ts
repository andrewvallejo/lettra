import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Word } from '$types';
import { splitText, objectifyWords, replaceNewlines } from '$lib/words';
import { checkForWordiables, powerWordiables } from '$lib/wordiables';

export const text: Writable<string> = writable('');

export const parsedText = derived(text, ($text): Word[] => {
	if (!$text) wordiables.set([]);
	checkForWordiables($text);
	const words = splitText(replaceNewlines($text));
	const objectifiedWords: Word[] = objectifyWords(words);
	powerWordiables(objectifiedWords);
	return objectifiedWords;
});

export const wordiables: Writable<string[]> = writable([]);
