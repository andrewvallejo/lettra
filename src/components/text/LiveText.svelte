<script lang="ts">
	import { regex, space, splitText, type WordI } from '$lib/editor';
	import { wordiables } from '../../store/text';
	import Word from '../text/Word.svelte';
	import Wordiables from '../text/Wordiables.svelte';

	/**
	 * @param {string} - text
	 * @description: user text input (visible)
	 */
	export let text: any[] = [];

	let stringText: string = '';

	$: stringText = text.reduce((acc: string, t: WordI): string => {
		acc += ` ${t.string}`;
		return acc;
	}, '');

	$: console.log('stringText', stringText);
	const isWordiable = (word: string): RegExpMatchArray | null => word.match(regex.wordiables);

	$: words = splitText(stringText);
</script>

<p class="live-text">
	{#each words as word}
		{#if isWordiable(word)}
			<Wordiables {word} index={$wordiables.indexOf(word)} />
		{:else if word.length}
			<Word {word} />
		{:else}
			{@html space}
		{/if}
	{/each}
</p>

<style lang="scss">
	.live-text {
		position: absolute;
		z-index: 1;
		top: 0;
		pointer-events: none;
		width: 100%;
		height: inherit;
		word-wrap: break-word;
	}
</style>
