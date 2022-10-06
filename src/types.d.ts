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
};

type Words = {
	words: Word[];
};

type Wordiables = {
	words: Word[];
};
