import { readable } from 'svelte/store';
import type { Readable } from 'svelte/store';
import type { PromptsI } from '$types';

export const prompts: Readable<PromptsI> = readable({
	one: `Dear \\Apple\\ My name is Andrew and I am applying for the \\Software Developer\\ role at \\Apple\\. I am a recent graduate from Turing, School of Software and Design with a affination to the \\Front-end\\. I have been programming for 3 years and have experience with \\Swift\\, \\Svelte\\, \\React\\, my favorite of those is \\Svelte\\.`,
	two: `\\1\\ \\2\\ \\3\\ \\1\\ \\2\\ \\3\\ \\1\\ \\4\\`,
	three: `\\1\\ \\2\\ 
	\\3\\ \\1\\
	 \\2\\ \\3\\ \\1\\ \\4\\`
});
