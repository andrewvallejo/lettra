<script lang="ts">
	import { text } from '../../store/text';

	/**
	 * @param {string} - word
	 * @description - string to be rendered as normal word
	 */
	export let word: string = '';

	/**
	 * @param {number} - index
	 * @description -
	 */
	export let index: number = 0;

	$: index <= $text.length && (word = `${word} `);
</script>

<span>
	{@html word}
</span>
