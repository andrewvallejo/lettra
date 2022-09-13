import { derived, writable } from 'svelte/store';

import { replaceNewlines } from '../lib/editor';

export const text = writable('');

/**
 * @constant {string} - parsedText
 * @summary - parses newLines from text
 * // !- this above summary cant be seen. look up how to view stores in jsdocs
 */
export const parsedText = derived(text, ($text) => replaceNewlines($text));

export const wordiables: never = writable([]);

export const isSync = writable(true);
