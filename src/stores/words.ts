import { writable } from 'svelte/store';
import type { Words, Word } from '$types';

const store: Words = {
	words: []
};

const wordStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		setParsedText: (words: Word[]) => update((word) => ({ ...word, words }))
	};
};

export const words = wordStore();
