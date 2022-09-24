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
		if (isWordiable) setWordiables(word);
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
	findWordiables(text);
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
	const words = splitText(replaceNewlines(text));
	return words.reduce((acc, word, index) => {
		const wordExpanded: WordI = {
			string: replaceNewlines(word),
			index: index + 1,
			isWordiable: false,
			color: 'black',
			wordiablePos: null
		};

		acc = [...acc, wordExpanded];
		console.log(acc);
		return acc;
	}, []);
};

const rainbow: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

const isWordiableWithSlashes = (word: string): RegExpMatchArray | null =>
	word.match(regex.wordiables);

const isWordiable = (word: string): boolean => matchedWords.includes(word);

export const powerWordiables = (text: object[]): never => {
	text.forEach((t) => {
		if (isWordiable(t.string) || isWordiableWithSlashes(t.string)) {
			t.iswordiable = true;
			t.wordiablePos = matchedWords.indexOf(t.string);
			t.color = rainbow[t.wordiablePos];
		}
	});
};
