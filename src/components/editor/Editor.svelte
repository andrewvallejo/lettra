<script lang="ts">
	import { parsedText, text } from '$src/stores/text';
	import LiveText from '$text/LiveText.svelte';

	let value = '';

	let prompt = `Dear \\Apple\\ My name is Andrew and I am applying for the \\Software Developer\\ role at \\Apple\\. I am a recent graduate from Turing, School of Software and Design with a affination to the \\Front-end\\. I have been programming for 3 years and have experience with \\Swift\\, \\Svelte\\, \\React\\, my favorite of those is \\Svelte\\.`;

	$: !value && (value = prompt);

	$: text.set(value);
	$: console.log($parsedText);
</script>

<div class="editor">
	<div class="container">
		{#key value || prompt}
			{#if value}
				<LiveText text={$parsedText} />
			{/if}
		{/key}
		<label for="editor">Editor</label>
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
			.text-input {
				position: absolute;
				top: 0;
				outline: none;
				resize: none;
				border: 1px solid lightgray;
				height: inherit;
				width: 100%;
				padding: 0;
				color: transparent;
				caret-color: black;
			}
		}
	}
</style>
