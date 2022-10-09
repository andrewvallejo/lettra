import { writable } from 'svelte/store';
import type { Word, Words } from '$types';

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
				word.occurrences = words.filter((w) => w.string === word.string).length;
			});
		},
		countOccurrences(word: string) {
			update((words: Words) => {
				const wordIndex = words.findIndex((w) => w.string === word);
				words[wordIndex].occurrences++;
				return words;
			});
		},
		clear() {
			set([]);
		}
	};
};

export const words = wordStore();
