import { regex } from './regex';

export const replaceNewlines = (text: string): string[] =>
	splitText(text.replace(regex.newLine, ' <br> '));

<<<<<<< HEAD
export const replaceLinebreaks = (text: string[]): string =>
	text.reduce((acc, word) => {
		if (word === '<br>') acc += '\n';
		else acc += word + ' ';
		return acc;
	}, '');

export const trimText = (text: string): string => text.replace(regex.nonWhitespace, ' ');

export const removeBackSlashes = (word: string) => word.replace(/\\/g, '');

export const addBackSlashes = (text: string): string => text.replace(regex.word, '\\$&\\');
=======
export const removeBackSlash = (word: string) => word.replace(/\\/g, '');
>>>>>>> 78872bb (Revert "Feature/button")

export const splitText = (text: string): string[] => text.split(' ');

export const space = ' ';

export const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

export const reverseParseText = (text: string) => {
	let processed = (text = trimText(text));
	processed = replaceLinebreaks(processed.split(' '));
	return processed;
};
