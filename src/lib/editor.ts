import { regex } from './regex';
import type { Word } from '$types';

export const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

export const isWordiable = (word: string, wordiableDraft: string[]): boolean => {
	const match = word.match(regex.wordiables);
	if (wordiableDraft.includes(word) || match) return true;
	return false;
};

export const objectifyWords = (words: string[], wordiableDraft: string[]): Word[] => {
	return words.map((word: string, index: number): Word => {
		return {
			string: word,
			index,
			isWordiable: isWordiable(word, wordiableDraft),
			color: 'black',
			wordiablePos: -1,
			occurrences: 0,
			type: 'word'
		};
	});
};

export const powerWordiables = (text: Word[], wordiableDraft: string[]): void => {
	text.forEach((word) => {
		if (word.isWordiable) {
			word.wordiablePos = wordiableDraft.indexOf(word);
			word.color = rainbow[word.wordiablePos];
			word.type = 'wordiable';
		}
	});
};

const modifyWord = {
	replaceNewlines: (text: string): string[] => {
		return text.replace(regex.newLine, ' ');
	},
	removeBackSlash: (text: string): string[] => {
		return text.replace(regex.backSlash, '');
	},
	splitText: (text: string): string[] => {
		return text.split(' ');
	}
};

export const replaceNewlines = (text: string): string[] => {
	return splitText(text.replace(regex.newLine, ' <br> '));
};

export const removeBackSlash = (word: string) => {
	return word.replace(/\\/g, '');
};

export const space = ' ';

export const splitText = (text: string): string[] => text.split(' ');

export default { ...modifyWord };
