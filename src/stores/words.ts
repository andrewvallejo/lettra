import { writable, derived } from 'svelte/store';
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

export const wordiableDraft = derived(words, ($words) => {
	const preWords = $words.words.filter((word) => word.isWordiable).map((word) => word.string);
	return [...new Set(preWords)];
});
