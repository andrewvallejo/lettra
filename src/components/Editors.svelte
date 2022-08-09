<script lang="ts">
	let textInput: string = '';
</script>

<div class="editor">
	<div class='container'>
		<p class='live-text'>{textInput}</p>
		<textarea class="text-input" bind:value={textInput}/>
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
				padding: 0;
				margin: 0;
				position: absolute;
				top: 0;
				height: inherit;
				z-index: 1;
				max-width: 100%;
				pointer-events: none;
				word-wrap: break-word;
				}
			.text-input {
				padding: 0;
				margin: 0;
				position: absolute;
				top:0;
				border: none;
				width: 100%;
				height: inherit;
				outline: none;
				border: 1px solid lightgray;
				color: white;
				caret-color: black;
			}
		}
	}
</style>
