import { writable } from 'svelte/store';
import type { Words, Word } from '$types';

const store: Words = [];

const wordStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		setWords(words: Word[]) {
			set(words);
		},
		countOccurrences(word: string) {
			update((words: Words) => {
				const wordIndex = words.findIndex((w) => w.string === word);
				words[wordIndex].occurrences++;
				return words;
			});
		}
	};
};

export const words = wordStore();
