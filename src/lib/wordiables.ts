import { wordiables } from '$stores/text';
import { regex } from './regex';
import type { WordI } from '$types';

let matchedWords: string[] = [];

export const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

const setWordiables = (word: string): void => {
	wordiables.set([...matchedWords, word]);
};

const findWordiables = (text: string[]): string | undefined => {
	return text.find((word) => {
		const isNotInMatchedWords = !matchedWords.includes(word);
		const hasOnlyTwoForwardSlashes: boolean = word.match(regex.backslash)?.length === 2;
		const isWordiable = isNotInMatchedWords && hasOnlyTwoForwardSlashes;
		if (isWordiable) setWordiables(word);
	});
};

const syncWordiables = (str: string[]): void => {
	matchedWords.forEach((word) => {
		if (!str.includes(word)) wordiables.set(matchedWords.filter((w) => w !== word));
	});
};

const sortMatchedWords = (str: string[]): void => {
	matchedWords.sort((a, b) => {
		const aIndex = str.indexOf(a);
		const bIndex = str.indexOf(b);
		return aIndex - bIndex;
	});
};

const syncMatches = (text: string[]): undefined => {
	if (text.length < 1) return;
	findWordiables(text);
	syncWordiables(text);
	sortMatchedWords(text);
};

const isWordiable = (word: string): boolean => {
	if (!matchedWords.length) return false;
	const match = word.match(regex.wordiables);
	if (match) return true;
	return false;
};

const getWordiablePos = (word: string): number => {
	const [match]: RegExpMatchArray = word.match(regex.wordiables) || [];
	if (match) return matchedWords.indexOf(match);
	return -1;
};

export const powerWordiables = (text: WordI[]): void => {
	const words = text.map(({ string }) => string);
	syncMatches(words);
	text.forEach((t) => {
		if (isWordiable(t.string)) {
			t.isWordiable = true;
			t.wordiablePos = getWordiablePos(t.string);
			t.color = rainbow[t.wordiablePos];
		}
	});
};

export const checkForWordiables = (text: string): string => {
	wordiables.subscribe((words) => (matchedWords = words));
	const matches = text.match(regex.wordiables);
	if (matches) syncMatches(matches);
	return text;
};
