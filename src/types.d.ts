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
	newLine: RegExp;
	newTab: RegExp;
};

export type PromptsI = {
	[key: string]: string;
};