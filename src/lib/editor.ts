import { matchedWords } from "./../store/text";

const regex = /\\(.*?)\b\\/g;

let wordiables: string[] = [];


export const wrapWords = (str: string) => {
	const words = str.split(" ");
	const wrapped = words
		.map((word) => {
			const matches = word.match(regex);
			if (matches) {
				return matches.reduce((acc, match) => {
					return acc.replace(match, `<stron>${match}</stron>`);
				}, word);
			}
			return word;
		})
		.join(" ");
	return wrapped;
};

export const replaceNewlines = (str: string) => {
	return str.replace(/\n/g, "<br>");
};

export const addMatchedWords = (str: string) => {
	matchedWords.subscribe((words) => {
		wordiables = words;
	});
	const matches = str.match(regex);
	if (matches) updateMatches(matches);
	return str;
};

const updateMatches = (str: string[]) => {
	// Adds unique matches to the store
	 str.forEach((match) => {
		if (!wordiables.includes(match)) {
			wordiables.push(match);
			matchedWords.set(wordiables);
		}
	});
	// Removes unused matches from the store
	wordiables.forEach((word) => {
		if (!str.includes(word)) {
			wordiables = wordiables.filter((w) => w !== word);
			matchedWords.set(wordiables);
		}
	});
}
