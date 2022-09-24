import { regex } from '$lib/regex';

export const replaceNewlines = (str: string): string => {
	return str.replace(regex.newline, ' <br> ');
};

export const space = '&nbsp;';

export const splitText = (text: string): string[] => text.split(' ');

export const getStringFromText = (text: WordI[]): string => {
	return text.reduce((acc: string, t: WordI): string => {
		acc += ` ${t.string}`;
		return acc;
	}, '');
};

export const objectifyWords = (words: string[]): WordI => {
	return words.reduce((acc, word, index) => {
		const wordExpanded: WordI = {
			string: replaceNewlines(word),
			index: index + 1,
			isWordiable: false,
			color: 'black',
			wordiablePos: null
		};
		acc.push(wordExpanded);
		return acc;
	}, []);
};
