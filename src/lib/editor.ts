import { matchedWords } from "./../store/text";

const regex = /\\(.*?)\b\\/g;

let wordiables: string[] = [];


export const wrapWords = (str: string) => {
	const words = str.split(" ");
	const wrapped = words
		.map((word) => {
			const matches = word.match(regex);
			if (matches) {
				return matches.reduce((acc, match) => {
					return acc.replace(match, `<strong>${match}</strong>`);
				}, word);
			}
			return word;
		})
		.join(" ");
	return wrapped;
};

export const replaceNewlines = (str: string) => {
	return str.replace(/\n/g, "<br>");
};

export const addMatchedWords = (str: string) => {
	matchedWords.subscribe((words) => {
		wordiables = words;
	});
	const matches = str.match(regex);
	if (matches) updateMatches(matches);
	return str;
};

const updateMatches = (str: string[]) => {
if (str.length < 2) return;


str.forEach((word) => {
/** conditions
 * 1. word is not in wordiables
 * 2. there are only two forward slashes wrapped around the word */
const isWorthy = word.match(/\\/g).length === 2 && !wordiables.includes(word);

		if (isWorthy) {
			wordiables.push(word);
			matchedWords.set(wordiables);
		}
	});
	// Removes unused matches from the store
	wordiables.forEach((word) => {
		if (!str.includes(word)) {
			wordiables = wordiables.filter((w) => w !== word);
			matchedWords.set(wordiables);
		}
	});
}

