import { regex } from './regex';
import type { WordI } from '$types';

export const replaceNewlines = (str: string): string => {
	return str.replace(regex.newLine, ' <br> ');
};

export const removeBackSlash = (word: string) => {
	return word.replace(/\\/g, '');
};

export const space = ' ';

export const splitText = (text: string): string[] => text.split(' ');

export const getStringFromText = (text: WordI[]): string => {
	return text.reduce((acc: string, t: WordI): string => {
		acc += ` ${t.string}`;
		return acc;
	}, '');
};

export const objectifyWords = (words: string[]): WordI[] => {
	return words.map((word: string, index: number): WordI => {
		return {
			string: word,
			index,
			isWordiable: false,
			color: '',
			wordiablePos: -1,
			occurrences: 0,
			type: 'word'
		};
	});
};
