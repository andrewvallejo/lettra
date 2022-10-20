import type { Word } from '$types';
import { addBackSlashes, rainbow } from './strings';
import { regex } from './regex';

export const isWordiable = (word: string): boolean => {
	const match = word.match(regex.wordiables);
	if (match) return true;
	return false;
};

export const isInWordiables = (word: string, wordiables: string[] = []): boolean => {
	if (wordiables.includes(addBackSlashes(word))) return true;
};

export const objectifyWords = (words: string[], wordiables: Word[]): Word[] => {
	return words.map((word: string, index: number): Word => {
		return {
			string: word,
			index,
			isWordiable: isWordiable(word, wordiables),
			isInWordiables: isInWordiables(word, wordiables),
			color: 'black',
			wordiablePos: -1,
			occurrences: 0,
			type: 'word'
		};
	});
};

export const powerWordiables = (text: Word[], wordiables: Word[]): void => {
	text.forEach((word) => {
		if (word.isWordiable) {
			word.wordiablePos = wordiables.indexOf(word.string);
			word.color = rainbow[word.wordiablePos];
			word.type = 'wordiable';
		} else if (word.isInWordiables) {
			word.wordiablePos = wordiables.indexOf(addBackSlashes(word.string));
			word.color = rainbow[word.wordiablePos];
			word.type = 'wordiable';
		}
	});
};
