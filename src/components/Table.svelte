<script lang="ts">
	import { removeBackSlashes } from '$lib/strings';
	import { wordiables } from '$stores/text';
	import { fade } from 'svelte/transition';
</script>

<div class="container">
	<header class="categories">
		<h2>wordiables</h2>
		<h2 class="occurrences">occurrences</h2>
	</header>
	{#each $wordiables as wordiable}
		<article class="wordRow">
			<div class="declaration">
				<h3 style="color: {wordiable.color}" transition:fade={{ delay: 250 }}>
					{removeBackSlashes(wordiable.string)}
				</h3>
				<div class="circle" style="background: {wordiable.color}" in:fade />
			</div>
			<h4 class="occurrences">{wordiable.occurrences}</h4>
		</article>
		<div class="line" style="background: {wordiable.color}" in:fade />
	{/each}
</div>

<style lang="scss">
	@media (max-width: 1200px) {
		.occurrences {
			display: none;
		}
	}

	@media (max-width: 800px) {
		.container {
			display: none;
		}
	}
	.container {
		position: relative;
		padding-inline: 1rem;
		height: 15rem;
		padding: 0.5rem 1rem;
		border: 1px solid grey;
		border-radius: 7px;
		overflow-y: scroll;

		.categories {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
			:is(h2, h3, h4) {
				font-family: Courier New, monospace;
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

			.declaration {
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
