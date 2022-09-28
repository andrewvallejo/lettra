import { derived, writable } from 'svelte/store';
import { objectifyWords, splitText, replaceNewlines, replaceSpaces } from '$editor/words';
import { checkForWordiables, powerWordiables } from '$editor/wordiables';
import type { WordI } from '$types';
import type { Writable } from 'svelte/store';

export const text: Writable<string> = writable('');

export const parsedText = derived(text, ($text): WordI[] => {
	const preText: string = replaceNewlines($text);
	const postText: string = replaceSpaces(preText);
	const words = splitText(postText);
	checkForWordiables(postText);
	// Words need to have properties isSpace or isLineBreak added.
	// Need to make sure space is its own word
	const bigWords = objectifyWords(words);
	powerWordiables(bigWords);
	return bigWords;
});

export const wordiables: Writable<string[]> = writable([]);

export const isSync: Writable<boolean> = writable(true);
