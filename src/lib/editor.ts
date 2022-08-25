import { wordiables } from '../store/text';

/**
 * @constant {string[]} matchedWords
 * @description staging for wordiables
 */
let matchedWords: string[] = [];

/**
 * @function syncMatches
 * @description Updates, removes, and resorts matching words
 * @param {string[]} text
 */
const syncMatches = (text: string[]) => {
	if (text.length < 1) return;
	const wordiable = findWordiables(text);
	setWordiables(wordiable);
	removeMatchedWords(text);
	reSortMatchedWords(text);
};

/**
 * @function findWordiables
 * @description checks text for wordiables
 * @param {string} text
 * @return {string} wordiable
 */
const findWordiables = (text: string[]) => {
	return text.find((word) => {
		const isNotInMatchedWords = !matchedWords.includes(word);
		const hasOnlyTwoForwardSlashes = word.match(/\\/g).length === 2;
		const isWordiable = isNotInMatchedWords && hasOnlyTwoForwardSlashes;
		if (isWordiable) return word;
	});
};

/**
 * @function setWordiables
 * @description Updates wordiables store with new wordiables
 * @param {string} - word
 */
const setWordiables = (word) => {
	wordiables.set([...matchedWords, word]);
};

/**
 * @function removeMatchedWords
 * @description Remove words no longer matched //! <-- Questionable
 * @param {string} - str
 */
// TODO - Test removeMatchedWords and see if description is accurate
const removeMatchedWords = (str: string[]) => {
	matchedWords.forEach((word) => {
		if (!str.includes(word)) wordiables.set(matchedWords.filter((w) => w !== word));
	});
};

/**
 * @function reSortMatchedWords
 * @description Sorts words based on first occurences
 * @param {string}
 */
const reSortMatchedWords = (str: string[]) => {
	matchedWords.sort((a, b) => {
		const aIndex = str.indexOf(a);
		const bIndex = str.indexOf(b);
		return aIndex - bIndex;
	});
};

/**
 * @constant Regex @implements /\\(.*?)\b\\/g
 * @description Checks for words that are wrapped in \backslashes\
 */

export const regex = /\B\\[^,.?!;:|\\n]*\\/gi;
/**
 * @function splitText
 * @description splits string by spaces
 * @returns ['an','array','of','strings']
 */
export const splitText = (text: string): string[] => text.split(' ');

/**
 * @function replaceNewlines
 * @description Checks for \n and returns replaces it with <br>
 * @returns <br>
 */
export const replaceNewlines = (str: string): string => {
	return str.replace(/\n/g, ' <br> ');
};

/**
 * @function addMatchedWords
 * @param {string} - str
 * @returns {string} string
 * @description Checks for \n and returns replaces it with <br>
 */
export const addMatchedWords = (str: string): string => {
	wordiables.subscribe((words) => (matchedWords = words));
	const matches = str.match(regex);
	if (matches) syncMatches(matches);
	return str;
};
