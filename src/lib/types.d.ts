export type WordI = {
	string: string;
	index: number;
	isWordiable: boolean;
	color: string;
	wordiablePos: number;
};

export type RegexI = {
	wordiables: RegExp;
	backslash: RegExp;
	newline: RegExp;
};
