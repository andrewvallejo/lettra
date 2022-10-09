import type { Instructions } from '../types';
import { writable } from 'svelte/store';

const store: Instructions = {
	active: true,
	script: `In order to create a wordiable, you must surround it with two backslashes.

For Example, the words \\flamingo\\ and \\doctor\\ are now wordiables.

With every following iteration of the word's colors corresponding with it.

I am applying for the \\doctor\\ role at \\flamingo\\ inc.

Hit any key to clear editor and begin!`
};

const instructionsStore = () => {
	const { subscribe, set, update } = writable(store);

	const toggle = () => {
		update((instructions: Instructions) => {
			instructions.active = !instructions.active;
			return instructions;
		});
	};

	return {
		subscribe,
		set,
		update,
		toggle
	};
};

export const instructions = instructionsStore();
