import { matchedWords } from "../store/text";

const regex = /\\(.*?)\b\\/g;

let wordiables: string[] = [];

export const wrapWords = (str: string) => {
	const words = str.split(' ');
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
		.join(' ');
	return wrapped;
};

export const replaceNewlines = (str: string) => {
	return str.replace(/\n/g, '<br>');
};

export const addMatchedWords = (str: string) => {
matchedWords.subscribe((words) => wordiables = words);
	const matches = str.match(regex);
	if (matches) updateMatches(matches);
	return str;
};

const updateMatches = (str: string[]) => {
	if (str.length < 2) return;
	removeMatchedWords(str);
	checkForWorthiness(str)
	reSortMatchedWords(str);
};

const checkForWorthiness = (str: string[]) => {
	str.forEach((word) => {
	const isNotInWordiables = !wordiables.includes(word);
	const hasOnlyTwoForwardSlashes = word.match(/\\/g).length === 2;
	const isWorthy = isNotInWordiables && hasOnlyTwoForwardSlashes;
		if (isWorthy) matchedWords.set([...wordiables, word]);
	});
};

 const removeMatchedWords = (str: string[]) => {
	wordiables.forEach((word) => {
		if (!str.includes(word))
			matchedWords.set(wordiables.filter((w) => w !== word));
	});
};

 const reSortMatchedWords = (str: string[]) => {
	wordiables.sort((a, b) => {
		const aIndex = str.indexOf(a);
		const bIndex = str.indexOf(b);
		return aIndex - bIndex;
	});
};
