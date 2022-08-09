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
	<Editors />
</div>

<style lang="scss">
	:global(*) {
    box-sizing: border-box;
		margin: 0;
		padding: 0;
    font-size: 1.5rem;
		font-family:  Roboto, sans-serif;
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
		.title {
			flex-direction: column;
			align-items: center;
			display: flex;
		}
	}
</style>
