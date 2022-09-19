import { derived, writable } from 'svelte/store';

import { objectifyWord } from '$src/lib/editor';

export const text = writable('');

export const parsedText = derived(text, ($text) => objectifyWord($text));

export const wordiables: never = writable([]);

export const isSync = writable(true);
