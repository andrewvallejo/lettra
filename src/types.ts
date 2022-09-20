export type WordI = {
	string: string;
	index: number;
	isWordiable: boolean;
	color: string;
	wordiablePos: null | number;
};

export type RegexI = {
	wordiables: RegExp;
};
