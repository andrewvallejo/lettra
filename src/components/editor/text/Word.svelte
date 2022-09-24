<script lang="ts">
	import type { WordI } from '$src/types';

	export let word: WordI;
	let color: string = word.color;

	let text = ` ${word.string}`;
</script>

<span style:color>
	{@html text}
</span>

<style lang="scss">
</style>
