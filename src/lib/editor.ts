import { wordiables } from '$stores/text';
import type { RegexI } from '$src/types';

let matchedWords: string[] = [];

const replaceNewlines = (str: string): string => {
	return str.replace(/\n/g, ' <br> ');
};

const findWordiables = (text: string[]): string => {
	return text.find((word) => {
		const isNotInMatchedWords = !matchedWords.includes(word);
		const hasOnlyTwoForwardSlashes = word.match(/\\/g).length === 2;
		const isWordiable = isNotInMatchedWords && hasOnlyTwoForwardSlashes;
		if (isWordiable) return word;
	});
};

const setWordiables = (word: string): never => {
	wordiables.set([...matchedWords, word]);
};

const syncWordiables = (str: string[]): never => {
	matchedWords.forEach((word) => {
		if (!str.includes(word)) wordiables.set(matchedWords.filter((w) => w !== word));
	});
};

const sortMatchedWords = (str: string[]): never => {
	matchedWords.sort((a, b) => {
		const aIndex = str.indexOf(a);
		const bIndex = str.indexOf(b);
		return aIndex - bIndex;
	});
};

const syncMatches = (text: string[]): never => {
	if (text.length < 1) return;
	const wordiable: string = findWordiables(text);
	setWordiables(wordiable);
	syncWordiables(text);
	sortMatchedWords(text);
};

export const regex: RegexI = {
	wordiables: /\\(.*?)\\/g
};

export const space = '&nbsp;';

export const splitText = (text: string): string[] => text.split(' ');

export const checkForWordiables = (text: string): string => {
	wordiables.subscribe((words) => (matchedWords = words));
	const matches: string[] = text.match(regex.wordiables);
	if (matches) syncMatches(matches);
	return text;
};

export const objectifyWord = (text) => {
	const splitText = text.split(' ');
	return splitText.reduce((acc, word, index) => {
		const wordExpanded: WordI = {
			string: replaceNewlines(word),
			index: index + 1,
			wordiable: false,
			color: 'black',
			wordiablePos: null
		};

		acc = [...acc, wordExpanded];
		return acc;
	}, []);
};
