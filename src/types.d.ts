export type Word = {
	string: string;
	index: number;
	isWordiable: boolean;
	color: string;
	wordiablePos: number;
	type: string;
	occurrences: number;
};

export type Regex = {
	wordiables: RegExp;
	backslash: RegExp;
	newLine: RegExp;
	newTab: RegExp;
<<<<<<< HEAD
	word: RegExp;
	nonWhitespace: RegExp;
=======
>>>>>>> 78872bb (Revert "Feature/button")
};

type Words = Word[];

type Wordiables = Word[];

type Instructions = {
	active: boolean;
	script: string;
};
