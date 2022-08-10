export const wrapWord = (str: string) => {
	const regex = /\\(.*?)\b\\/g;
	return str.replace(regex, "<strong>\\$1\\</strong>");
};

export const replaceNewlines = (str: string) => {
	return str.replace(/\n/g, "<br>");
};

