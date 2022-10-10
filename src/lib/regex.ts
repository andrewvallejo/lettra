import type { Regex } from '$types';

export const regex: Regex = {
	wordiables: /\\(.*?)\\/g,
	backslash: /\\/g,
	newLine: /\n/g,
	newTab: /\t/g,
	word: /\w+/g,
	nonWhitespace: /[^\S\r\n]+/g
};
