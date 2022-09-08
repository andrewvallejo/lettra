<script lang="ts">
	import { wordiables } from '../../store/text';
	import Word from './Word.svelte';

	/**
	 * @param {string} - word
	 * @description - string to be rendered as wordiable
	 */
	export let word: string = '';

	const rainbow: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

	export let index: number = 0;

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
