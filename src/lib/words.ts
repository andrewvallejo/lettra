import { regex } from './regex';
import type { Word } from '$types';
import { isWordiable } from '$lib/wordiables';
export const replaceNewlines = (text: string): string => {
	return splitText(text.replace(regex.newLine, ' <br> '));
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
