<script lang="ts">
	import type { WordI } from '$src/types';

	export let word: WordI = {
		string: '',
		index: 0,
		isWordiable: false,
		color: 'black',
		wordiablePos: null
	};

	let color: string = word.color;

	let text = ` ${word.string}`;
</script>

<span style:color>
	{@html text}
</span>

<style lang="scss">
</style>
