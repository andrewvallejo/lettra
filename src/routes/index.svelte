<script lang="ts">
	import { base } from '$app/paths';
	import Editors from '../components/Editors.svelte';

	export let editor;

	let editorState = editor;

	const bark = () => {
		console.log('woof');
	};
</script>

<div class="wrapper">
	<header>
		<img class="logo" src={`${base}/favicon.png`} alt="Lettra's Logo" />
		<div class="title">
			<h1>Lettra</h1>
			<h2>by Andrew Vallejo</h2>
		</div>
	</header>
	<button on:click={bark}>Woof</button>
	<Editors />
</div>

<style lang="scss">
	:global(*) {
		padding: 0;
		margin: 0;
    box-sizing: border-box;
		font-family:  Roboto, sans-serif;
    font-size: 1.5rem;
    color: black;
  }
	.wrapper {
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		display: flex;
		height: 100vh;
	}

	.logo {
		width: 100px;
		height: 100px;
	}

	header {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		display: flex;
		width: 100%;
		line-height: 0.1;
		.title {
			flex-direction: column;
			align-items: center;
			display: flex;
		}
	}
</style>
