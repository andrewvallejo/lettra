<script lang="ts">
	import { powerWordiables } from '$editor/wordiables';
	import { getStringFromText, space, splitText } from '$editor/words';
	import { objectifiedWords } from '$stores/text';
	import Word from '$components/editor/words/Word.svelte';
	import type { WordI } from '$types';

	export let text: WordI[];

	let sentence: string[];

	$: powerWordiables(text);
	// ! Words are out of sync.. I think things are repeating twice
	// TODO: look into DOM
	// ! Potentially see why $text doesn't matched text from Editor
	// TODO look into this
	// $: $objectifiedWords && (text = $objectifiedWords);
	$: sentence = splitText(getStringFromText(text));
	$: console.log('sentence', sentence);
</script>

<p class="live-text">
	{#each sentence as word, index}
		{#key index}
			{#if text[index]?.isWordiable && text[index]?.string.includes(word)}
				<Word word={text[index]} />
			{:else if text[index]?.string.length}
				<Word word={text[index]} />
			{/if}
		{/key}
		{@html space}
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
