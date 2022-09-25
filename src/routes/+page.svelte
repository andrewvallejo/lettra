<script lang="ts">
	import Table from '$components/Table.svelte';
	import Editor from '$components/editor/Editor.svelte';
</script>

<svelte:head>
	<title>Lettra</title>
</svelte:head>

<div class="wrapper">
	<header>
		<img class="logo" src={`favicon.png`} alt="Lettra's Logo" />
		<div class="title">
			<h1>Lettra</h1>
			<h2>by Andrew Vallejo</h2>
		</div>
	</header>
	<main class="layout">
		<Table />
		<Editor />
	</main>
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

	.layout {
		display: flex;
		width: 100%;
		height: 100%;
	}
</style>
