import { writable, derived } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';
import { replaceNewlines } from '$lib/editor';

export const text: Writable<string> = writable('');

export const cleanText: Readable<string[]> = derived(text, ($text) => {
	return replaceNewlines($text);
});
