import { derived, writable } from 'svelte/store';
import { objectifyWords, splitText, replaceNewlines } from '$editor/words';
import { checkForWordiables, powerWordiables } from '$editor/wordiables';
import type { WordI } from '$types';
import type { Writable } from 'svelte/store';

export const text: Writable<string> = writable('');

export const parsedText = derived(text, ($text): WordI[] => {
	checkForWordiables($text);
	let words = splitText(replaceNewlines($text));
	// Words need to have properties isSpace or isLineBreak added.
	// Need to make sure space is its own word
	words = objectifyWords(words);
	powerWordiables(words);
	return words;
});

export const wordiables: Writable<string[]> = writable([]);

export const isSync: Writable<boolean> = writable(true);
