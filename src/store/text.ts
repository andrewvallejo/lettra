import { derived, writable } from "svelte/store";

import { replaceNewlines, wrapWords } from "../lib/editor";

export const text = writable<string>('');

export const parsedText = derived(
	text,
	$text => {
    const parsed = replaceNewlines($text)
    return wrapWords(parsed);
  }
);


export const matchedWords = writable<string[]>([]);


