import { readable } from 'svelte/store';
import type { Readable } from 'svelte/store';

export const instructions: Readable<string> = readable(
	`In order to create a wordiable, you must surround it with two backslashes. For Example, \\flamingo\\ and \\doctor\\ could be wordiables. With every following iteration of the word's colors corresponding with it. \n  \n  I am applying for the \\doctor\\ role at \\flamingo\\ inc. \n \n	Hit any key to clear editor and begin!`
);
