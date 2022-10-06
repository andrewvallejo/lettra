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
