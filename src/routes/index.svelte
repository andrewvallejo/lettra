<script lang="ts">
	import { base } from '$app/paths';
	import Editor from '../components/Editor.svelte';
</script>

<svelte:head>
	<title>Lettra</title>
</svelte:head>

<div class="wrapper">
	<header>
		<img class="logo" src={`${base}/favicon.png`} alt="Lettra's Logo" />
		<div class="title">
			<h1>Lettra</h1>
			<h2>by Andrew Vallejo</h2>
		</div>
	</header>
	<Editor />
</div>

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		font-family: Roboto, sans-serif;
		color: black;
	}

	:global(strong) {
		color: green;
		font-weight: normal;
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
