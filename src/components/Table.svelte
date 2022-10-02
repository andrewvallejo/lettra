<script lang="ts">
	import { wordiables } from '$stores/text';
	import { rainbow } from '$lib/wordiables';
	import { fade } from 'svelte/transition';

	const removeBackSlash = (word: string) => {
		return word.replace(/\\/g, '');
	};
</script>

<div class="container">
	<header class="categories">
		<h2>wordiables</h2>
		<h2>occurences</h2>
	</header>

	{#each $wordiables as wordiable, i}
		<article class="wordRow">
			<div class="declation">
				<h3 style="color: {rainbow[i]}" transition:fade={{ delay: 250 }}>
					{removeBackSlash(wordiable)}
				</h3>
				<div class="circle" style="background: {rainbow[i]}" in:fade />
			</div>
			<h4 transition:fade={{ delay: 250 }}>0</h4>
		</article>
		<div class="line" style="background: {rainbow[i]}" in:fade />
	{/each}
</div>

<style lang="scss">
	.container {
		position: relative;
		width: 18rem;
		height: 15rem;
		padding: 0.5rem 1rem;
		border: 1px solid grey;
		border-radius: 7px;
		.categories {
			display: flex;
			justify-content: space-between;
			align-items: center;
			h2 {
				font-weight: 400;
				font-size: 1.2rem;
			}
		}
		&::before {
			content: '';
			z-index: -1;
			position: absolute;
			border: 5px solid lightgrey;
			inset: 0;
		}

		.wordRow {
			display: flex;
			justify-content: space-between;
			.declation {
				display: flex;
				flex-direction: row-reverse;
				align-items: center;
				gap: 0 4px;
			}
			.circle {
				width: 0.5rem;
				height: 0.5rem;
				border-radius: 50%;
			}
		}
		.line {
			opacity: 0.2;
			width: 100%;
			height: 1px;
			margin-bottom: 0.25rem;
		}
	}
</style>
