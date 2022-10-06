import { writable, derived } from 'svelte/store';
import type { Writable, Derived } from 'svelte/store';
import { replaceNewlines } from '$lib/words';

export const text: Writable<string> = writable('');

export const cleanText: Derived<string> = derived(text, ($text) => {
	if ($text) {
		return replaceNewlines($text);
	}
});
