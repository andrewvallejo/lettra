<script lang="ts">
	import { wordiables } from '../../store/text';

	/**
	 * @name
	 * @param {string} - word
	 * @description - string to be rendered as wordiable
	 */
	export let word: string = '';

	const rainbow: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

	let wordiableIndex: number = $wordiables.indexOf(word);

	let color: string = rainbow[wordiableIndex];
</script>

<strong style:color>
	{`${word} `}
</strong>

<style lang="scss">
</style>
