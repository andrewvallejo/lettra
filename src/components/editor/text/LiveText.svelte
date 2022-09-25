<script lang="ts">
	import { getStringFromText, splitText } from '$editor/words';
	import { powerWordiables } from '$editor/wordiables';
	import type { WordI } from '$types';
	import Word from '$text/Word.svelte';

	export let text: WordI[] = [];

	let words: string[] = splitText(getStringFromText(text));

	$: powerWordiables(text);
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
