<script lang="ts">
	import type { WordI } from '$types';

	export let word: WordI;

	let color: string = word.color;
	let text: string = word.string;
</script>

<span style:color>
	{@html text}
</span>

<style lang="scss">
</style>
