import type { Regex } from '$types';

export const regex: Regex = {
	wordiables: /\\(.*?)\\/g,
	backslash: /\\/g,
	newLine: /\n/g,
<<<<<<< HEAD
	newTab: /\t/g,
	word: /\w+/g,
	nonWhitespace: /[^\S\r\n]+/g
=======
	newTab: /\t/g
>>>>>>> 78872bb (Revert "Feature/button")
};
