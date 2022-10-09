import type { Word } from '$types';
import { rainbow } from './strings';
import { regex } from './regex';

export const isWordiable = (word: string): boolean => {
	const match = word.match(regex.wordiables);
	if (match) return true;
	return false;
};

export const objectifyWords = (words: string[]): Word[] => {
	return words.map((word: string, index: number): Word => {
		return {
			string: word,
			index,
			isWordiable: isWordiable(word),
			color: 'black',
			wordiablePos: -1,
			occurrences: 0,
			type: 'word'
		};
	});
};

export const powerWordiables = (text: Word[], wordiableDraft: Word[]): void => {
	const stringifiedDraft = wordiableDraft.map((word) => word.string);
	text.forEach((word) => {
		if (word.isWordiable) {
			word.wordiablePos = stringifiedDraft.indexOf(word.string);
			word.color = rainbow[word.wordiablePos];
			word.type = 'wordiable';
		}
	});
};
