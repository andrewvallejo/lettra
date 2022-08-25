import { derived, writable } from 'svelte/store';

import { replaceNewlines } from '../lib/editor';

export const text = writable('');

export const parsedText = derived(text, ($text) => replaceNewlines($text));

export const wordiables: never = writable([]);
