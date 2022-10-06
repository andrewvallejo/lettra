import { regex } from './regex';
import type { Word } from '$types';

export const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

export const isWordiable = (word: string, preWordiables): boolean => {
	const match = word.match(regex.wordiables);
	if (preWordiables.includes(word) || match) return true;
	return false;
};

const getWordiablePos = (word: string, preWordiables): number => {
	const match = word.match(regex.wordiables);
	if (preWordiables.includes(word)) {
		return preWordiables.indexOf(word);
	}
	if (match) return match.index;
	return -1;
};

export const powerWordiables = (text: Word[], preWordiables: string[]): void => {
	text.forEach((word) => {
		if (word.isWordiable) {
			word.wordiablePos = getWordiablePos(word.string, preWordiables);
			word.color = rainbow[word.wordiablePos];
		}
	});
};

export const replaceNewlines = (text: string): string => {
	return splitText(text.replace(regex.newLine, ' <br> '));
};

export const removeBackSlash = (word: string) => {
	return word.replace(/\\/g, '');
};

export const space = ' ';

export const splitText = (text: string): string[] => text.split(' ');

export const objectifyWords = (words: string[], preWordiables: string[]): Word[] => {
	return words.map((word: string, index: number): Word => {
		return {
			string: word,
			index,
			isWordiable: isWordiable(word, preWordiables),
			color: 'black',
			wordiablePos: -1,
			occurrences: 0,
			type: isWordiable ? 'wordiable' : 'word'
		};
	});
};
