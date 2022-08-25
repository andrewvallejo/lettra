<script lang="ts">
	import { regex } from '$lib/editor';
	import Wordiables from '../text/Wordiables.svelte';
	import Word from '../text/Word.svelte';

	export let text: string = '';

	$: words = text.split(' ');
	const isWordiable = (word: string): RegExpMatchArray | null => word.match(regex);
</script>

<p class="live-text">
	{#each words as word}
		{#if isWordiable(word)}
			<Wordiables {word} />
		{:else}
			<Word {word} />
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
