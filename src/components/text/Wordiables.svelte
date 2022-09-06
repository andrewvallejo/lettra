<script lang="ts">
	import { wordiables } from '../../store/text';

	/**
	 * @param {string} - word
	 * @description - string to be rendered as wordiable
	 */
	export let word: string = '';

	const rainbow: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

	export let index: number = 0;

	let color: string = rainbow[index];
</script>

<strong style:color>
	{`${word} `}
</strong>

<style lang="scss">
</style>
