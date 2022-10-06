import { regex } from './regex';
import type { Word } from '$types';

const matchedWords: string[] = [];

export const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

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

export const powerWordiables = (text: Word[]): void => {
	text.forEach((t) => {
		if (isWordiable(t.string)) {
			t.isWordiable = true;
			t.wordiablePos = getWordiablePos(t.string);
			t.color = rainbow[t.wordiablePos];
		}
	});
};
