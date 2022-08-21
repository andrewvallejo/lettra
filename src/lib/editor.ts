import { wordiables } from '../store/text';

export const regex = /\\(.*?)\b\\/g;

let matchedWords: string[] = [];

export const replaceNewlines = (str: string) => {
	return str.replace(/\n/g, '<br>');
};

export const addMatchedWords = (str: string) => {
	wordiables.subscribe((words) => (matchedWords = words));
	const matches = str.match(regex);
	if (matches) updateMatches(matches);
	return str;
};

const updateMatches = (str: string[]) => {
	if (str.length < 2) return;
	removeMatchedWords(str);
	checkForWorthiness(str);
	reSortMatchedWords(str);
};

const checkForWorthiness = (str: string[]) => {
	str.forEach((word) => {
		const isNotInMatchedWords = !matchedWords.includes(word);
		const hasOnlyTwoForwardSlashes = word.match(/\\/g).length === 2;
		const isWorthy = isNotInMatchedWords && hasOnlyTwoForwardSlashes;
		if (isWorthy) wordiables.set([...matchedWords, word]);
	});
};

const removeMatchedWords = (str: string[]) => {
	matchedWords.forEach((word) => {
		if (!str.includes(word)) wordiables.set(matchedWords.filter((w) => w !== word));
	});
};

const reSortMatchedWords = (str: string[]) => {
	matchedWords.sort((a, b) => {
		const aIndex = str.indexOf(a);
		const bIndex = str.indexOf(b);
		return aIndex - bIndex;
	});
};
