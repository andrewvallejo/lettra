import { derived, writable } from 'svelte/store';

import { objectifyWord, checkForWordiables } from '$src/lib/editor';

export const text = writable('');

export const parsedText = derived(text, ($text) => {
	checkForWordiables($text);
	return objectifyWord($text);
});

export const wordiables: never = writable([]);

export const isSync = writable(true);
