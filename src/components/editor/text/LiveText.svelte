<script lang="ts">
	import { powerWordiables, space, splitText } from '$src/lib/editor';
	import type { WordI } from '$src/types';
	import Word from '$text/Word.svelte';

	export let text: any[] = [];

	let stringText: string = '';

	$: stringText = text.reduce((acc: string, t: WordI): string => {
		acc += ` ${t.string}`;
		return acc;
	}, '');

	$: powerWordiables(text);

	$: words = splitText(stringText);
</script>

<p class="live-text">
	{#each words as word, i}
		{#if text[i]?.isWordiable && text[i]?.string.includes(word)}
			<Word word={text[i]} />
		{:else if text[i]?.string.length}
			<Word word={text[i]} />
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
