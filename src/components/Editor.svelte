<script lang="ts">
	import { replaceNewlines, wrapWord } from '../lib/editor';
	import { words } from '../store/words';

	let textInput: string = '';

	$: words.set([textInput]);
	let text: string = '';

	$: parsedText = wrapWord(textInput);
	$: text = replaceNewlines(parsedText);
</script>

<div class="editor">
	<div class="container">
		<p class="live-text">{@html text}</p>
		<textarea class="text-input" bind:value={textInput} />
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
