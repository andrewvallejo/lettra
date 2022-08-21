<script lang="ts">
	import { regex } from '$lib/editor';

	import Wordiables from './Wordiables.svelte';

	export let text: string = '';

	const isWordiable = (word: string): RegExpMatchArray | null => word.match(regex);
</script>

<p class="live-text">
	{#each text.split(' ') as word}
		{#if isWordiable(word)}
			<Wordiables>{`${word} `}</Wordiables>
		{:else}
			{`${word} `}
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
