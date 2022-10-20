import type { Word } from '$types';
import { addBackSlashes, rainbow } from './strings';
import { regex } from './regex';

export const isWordiable = (word: string, draft: string[] = []): boolean => {
	const match = word.match(regex.wordiables);
	if (match) return true;
	if (draft.length) {
		//check to see if word wrapped in \\ backslashes is in draft
		if (draft.includes(addBackSlashes(word))) return true;
	}
	return false;
};

export const objectifyWords = (words: string[], wordiableDraft: Word[]): Word[] => {
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
