import { derived, writable } from 'svelte/store';
import { objectifyWords, splitText, replaceNewlines } from '$src/lib/editor';
import { checkForWordiables } from '$src/lib/wordiables';

export const text = writable('');

export const parsedText = derived(text, ($text) => {
	checkForWordiables($text);
	const words = splitText(replaceNewlines($text));
	return objectifyWords(words);
});

export const wordiables: never = writable([]);

export const isSync = writable(true);
