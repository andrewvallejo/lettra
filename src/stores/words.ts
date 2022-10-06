import { writable } from 'svelte/store';
import type { Words, Word } from '$types';

const store: Words = {
	parsedText: []
};

const wordStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		setParsedText: (parsedText: Word[]) => update((word) => ({ ...word, parsedText }))
	};
};

export const words = wordStore();
