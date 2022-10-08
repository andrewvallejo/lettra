import { regex } from './regex';

export const replaceNewlines = (text: string): string[] => {
	return splitText(text.replace(regex.newLine, ' <br> '));
};

export const removeBackSlash = (word: string) => {
	return word.replace(/\\/g, '');
};

export const splitText = (text: string): string[] => text.split(' ');

export const space = ' ';

export const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];
