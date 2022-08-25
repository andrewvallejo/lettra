<script lang="ts">
	import { wordiables } from '../../store/text';
	export let word: string = '';

	const rainbow: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

	let wordiableIndex: number = $wordiables.indexOf(word);

	let color: string = rainbow[wordiableIndex];
	// TODO - Prevent linebreak from entering this file
</script>

<strong style:color>
	{`${word} `}
</strong>

<style lang="scss">
</style>
