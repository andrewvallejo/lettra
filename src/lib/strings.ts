import { regex } from './regex';

export const replaceNewlines = (text: string): string[] =>
	splitText(text.replace(regex.newLine, ' <br> '));

export const removeBackSlashes = (word: string) => word.replace(/\\/g, '');

export const addBackSlashes = (text: string): string => text.replace(regex.word, '\\$&\\');

export const splitText = (text: string): string[] => text.split(' ');

export const space = ' ';

export const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];
