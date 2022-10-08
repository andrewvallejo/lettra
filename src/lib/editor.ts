import type { Word } from '$types';
import { regex } from './regex';
import { rainbow } from './strings';

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
			word.wordiablePos = wordiableDraft.indexOf(word.string);
			word.color = rainbow[word.wordiablePos];
			word.type = 'wordiable';
		}
	});
};
