<script lang="ts">
	import Word from './Word.svelte';

	/**
	 * @param {string} - word
	 * @description - string to be rendered as wordiable
	 */
	export let word: string = '';

	/**
	 * @param {number} - index
	 * @description - index of wordiable
	 */
	export let index: number = 0;

	const rainbow: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

	let color: string = rainbow[index];
	let isWordiable: boolean = index > -1;
</script>

{#if isWordiable}
	<strong style:color>
		{`${word} `}
	</strong>
{:else}
	<Word {word} />
{/if}

<style lang="scss">
</style>
