import { regex } from './regex';

export const replaceNewlines = (text: string): string[] =>
	splitText(text.replace(regex.newLine, ' <br> '));

export const replaceLinebreaks = (text: string[]): string =>
	text.reduce((acc, word) => {
		if (word === '<br>') acc += '\n';
		else acc += word + ' ';
		return acc;
	}, '');

export const trimText = (text: string): string => text.replace(regex.nonWhitespace, ' ');

export const removeBackSlashes = (word: string) => word.replace(/\\/g, '');

export const addBackSlashes = (text: string): string => text.replace(regex.word, '\\$&\\');

export const splitText = (text: string): string[] => text.split(' ');

export const space = ' ';

export const rainbow = [
	'rgb(255, 0, 0)',
	'rgb(255, 165, 0)',
	'rgb(255, 255, 0)',
	'rgb(0, 128, 0)',
	'rgb(0, 0, 255)',
	'rgb(75, 0, 130)',
	'rgb(238, 130, 238)',
	'rgb(0, 0, 0)'
];

export const reverseParseText = (text: string) => {
	let processed = (text = trimText(text));
	processed = replaceLinebreaks(processed.split(' '));
	return processed;
};
