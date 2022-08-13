<script lang="ts">
	import { addMatchedWords } from '../lib/editor';

	import { liveText, matchedWords, text } from '../store/text';

	let value: string = '';

	$: text.set(value);
	$: addMatchedWords(value);
</script>

<div class="editor">
	<div class="container">
		{#if value}
			<p class="live-text">{@html $liveText}</p>
		{/if}
		<label for="editor"> Editor </label>

		<textarea id="editor" name="editor" class="text-input" bind:value />
	</div>
</div>

<style lang="scss">
	.editor {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		display: flex;
		width: 100%;
		height: 100%;
		label[for='editor'] {
			font-size: 0;
		}
		.container {
			position: relative;
			width: 60%;
			height: inherit;
			.live-text {
				position: absolute;
				z-index: 1;
				top: 0;
				pointer-events: none;
				width: 100%;
				height: inherit;
				word-wrap: break-word;
			}
			.text-input {
				position: absolute;
				top: 0;
				outline: none;
				resize: none;
				border: 1px solid lightgray;
				padding: 0;
				height: inherit;
				width: 100%;
				color: transparent;
				caret-color: black;
			}
		}
	}
</style>
