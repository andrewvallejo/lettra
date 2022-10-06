import { regex } from './regex';
import type { Word } from '$types';

export const replaceNewlines = (str: string): string => {
	return str.replace(regex.newLine, ' <br> ');
};

export const removeBackSlash = (word: string) => {
	return word.replace(/\\/g, '');
};

export const space = ' ';

export const splitText = (text: string): string[] => text.split(' ');

export const getStringFromText = (text: Word[]): string => {
	return text.reduce((acc: string, t: Word): string => {
		acc += ` ${t.string}`;
		return acc;
	}, '');
};

export const objectifyWords = (words: string[]): Word[] => {
	return words.map((word: string, index: number): Word => {
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
