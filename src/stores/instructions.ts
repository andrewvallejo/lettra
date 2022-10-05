import { writable } from 'svelte/store';

type Instructions = {
	prompt: string;
	active: boolean;
};

const store: Instructions = {
	prompt: `In order to create a wordiable, you must surround it with two backslashes. For Example, \\flamingo\\ and \\doctor\\ could be wordiables. With every following iteration of the word's colors corresponding with it. \n  \n  I am applying for the \\doctor\\ role at \\flamingo\\ inc. \n \n	Hit any key to clear editor and begin!`,
	active: true
};

const instructionsStore = () => {
	const { subscribe, set, update } = writable(store);
	const deactivate = () => update((instructions) => ({ ...instructions, active: false }));

	return {
		subscribe,
		set,
		update,
		deactivate
	};
};

export const instructions = instructionsStore();
