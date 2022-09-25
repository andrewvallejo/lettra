<script lang="ts">
	import { wordiables } from '$src/stores/text';
</script>

<div>
	{#each $wordiables as wordiable}
		<p>{wordiable}</p>
	{/each}
</div>
