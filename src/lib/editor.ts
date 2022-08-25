import { wordiables } from '../store/text';

let matchedWords: string[] = [];

const updateMatches = (str: string[]) => {
	if (str.length < 1) return;
	const wordiable = findWordiables(str);
	setWordiables(wordiable);
	removeMatchedWords(str);
	reSortMatchedWords(str);
};

const findWordiables = (str: string[]) => {
	return str.find((word) => {
		const isNotInMatchedWords = !matchedWords.includes(word);
		const hasOnlyTwoForwardSlashes = word.match(/\\/g).length === 2;
		const isWordiable = isNotInMatchedWords && hasOnlyTwoForwardSlashes;
		if (isWordiable) return word;
	});
};

const setWordiables = (word) => {
	wordiables.set([...matchedWords, word]);
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

export const regex = /\\(.*?)\b\\/g;

export const splitText = (text) => text.split(' ');

export const replaceNewlines = (str: string) => {
	return str.replace(/\n/g, '<br>');
};

export const addMatchedWords = (str: string) => {
	wordiables.subscribe((words) => (matchedWords = words));
	const matches = str.match(regex);
	if (matches) updateMatches(matches);
	return str;
};
