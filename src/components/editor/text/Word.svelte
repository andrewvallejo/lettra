<script lang="ts">
	import { text } from '$stores/text';

	export let word: string = '';

	export let index: number = 0;

	$: index <= $text.length && (word = `${word} `);
</script>

<span>
	{@html word}
</span>
