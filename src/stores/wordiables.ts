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
		setWordiables: (wordiables: Word[]) => update((word) => ({ ...word, wordiables }))
	};
};

export const wordiables = wordiableStore();
