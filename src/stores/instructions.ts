import { writable } from 'svelte/store';

type Instructions = {
	prompt: string;
	active: boolean;
};

const store: Instructions = {
	prompt: `In order to create a wordiable, you must surround it with two backslashes. \n For Example, the words \\flamingo\\ and \\doctor\\ are now wordiables.\n With every following iteration of the word's colors corresponding with it.\n I am applying for the \\doctor\\ role at \\flamingo\\ inc. \n Hit any key to clear editor and begin!`,
	active: true
};

const instructionsStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		toggleInstructions: () => update((store) => ({ ...store, active: !store.active }))
	};
};

export const instructions = instructionsStore();
