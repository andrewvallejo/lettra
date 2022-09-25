<script lang="ts">
	import { getStringFromText, splitText } from '$lib/editor';
	import { powerWordiables } from '$lib/wordiables';
	import type { WordI } from '$lib/types';
	import Word from '$text/Word.svelte';

	export let text: WordI[] = [];

	$: powerWordiables(text);

	$: words = splitText(getStringFromText(text));
</script>

<p class="live-text">
	{#each words as word, i}
		{#if text[i]?.isWordiable && text[i]?.string.includes(word)}
			<Word word={text[i]} />
		{:else if text[i]?.string.length}
			<Word word={text[i]} />
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
		overflow-wrap: break-word;
	}
</style>
