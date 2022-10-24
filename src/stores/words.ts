import { writable } from 'svelte/store';
import type { Word, Words } from '$types';
import { addBackSlashes } from '$lib/strings';
const store: Words = [];

const wordStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		setWords(words: Word[]) {
			set(words);
			words.forEach((word) => {
				word.occurrences += words.filter((w) => w.string === word.string).length;
				word.occurrences += words.filter((w) => word.string === addBackSlashes(w.string)).length;
			});
		},
		clear() {
			set([]);
		}
	};
};

export const words = wordStore();
