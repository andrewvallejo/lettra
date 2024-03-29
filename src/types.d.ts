export type Word = {
	string: string;
	index: number;
	isWordiable: boolean;
	isInWordiables: boolean;
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
	word: RegExp;
	nonWhitespace: RegExp;
};

type Words = Word[];

type Wordiables = Word[];

type Instructions = {
	active: boolean;
	script: string;
};
