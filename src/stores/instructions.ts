import { writable } from 'svelte/store';

type Instructions = {
	prompt: string;
	instructionActive: boolean;
};

const store: Instructions = {
	prompt: `In order to create a wordiable, you must surround it with two backslashes. For Example, \\flamingo\\ and \\doctor\\ could be wordiables. With every following iteration of the word's colors corresponding with it. \n  \n  I am applying for the \\doctor\\ role at \\flamingo\\ inc. \n \n	Hit any key to clear editor and begin!`,
	instructionActive: true
};

const instructionsStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		toggleInstructions: () =>
			update((store) => ({ ...store, instructionActive: !store.instructionActive }))
	};
};

export const instructions = instructionsStore();
