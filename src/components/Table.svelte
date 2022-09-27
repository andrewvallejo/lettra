<script lang="ts">
	import { wordiables } from '$stores/text';
</script>

<div class="wordiables">
	{#each $wordiables as wordiable}
		<p>{wordiable}</p>
	{/each}
</div>

<style lang="scss">
	.wordiables {
		position: absolute;
		z-index: 2;
		display: flex;
		flex-direction: column;
	}
</style>
