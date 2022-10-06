import { writable } from 'svelte/store';
import type { Wordiables, Word } from '$types';

const store: Wordiables = {
	words: []
};

const wordiableStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		setWords: (words: Word[]) => update((word) => ({ ...word, words }))
	};
};

export const wordiables = wordiableStore();
