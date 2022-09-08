<script lang="ts">
	import { wordiables } from '../store/text';
</script>

<div>
	{#each $wordiables as wordiable}
		<p>{wordiable}</p>
	{/each}
</div>
