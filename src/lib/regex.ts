import type { RegexI } from '$types';

export const regex: RegexI = {
	wordiables: /\\(.*?)\\/g,
	backslash: /\\/g,
	newLine: /\n/g,
	newTab: /\t/g,
	space: /\s/g
};
