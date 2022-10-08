import { writable } from 'svelte/store';
import type { Wordiables, Word } from '$types';

const store: Wordiables = [];

const wordiableStore = () => {
	const { subscribe, set, update } = writable(store);

	const addWordiables = (word: Wordiables) => {
		update((wordiables: Wordiables) => {
			return [...wordiables, ...word];
		});
	};

	const removeWordiable = (word: Word) => {
		update((wordiables: Wordiables) => {
			const wordIndex = wordiables.findIndex((w) => w.string === word.string);
			wordiables.splice(wordIndex, 1);
			return wordiables;
		});
	};

	const resetWordiables = () => {
		set(store);
	};

	return {
		subscribe,
		set,
		update,
		addWordiables,
		removeWordiable,
		resetWordiables
	};
};

export const wordiables = wordiableStore();
