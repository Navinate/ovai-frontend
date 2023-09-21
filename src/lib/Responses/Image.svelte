<script lang="ts">
	import type { speciesData } from '$lib/types/responseType';

	export let speciesData: speciesData[];
	export let naturalTextResponse: string;
</script>

<main>
	<h3>Fathom said:</h3>
	<blockquote>{naturalTextResponse}</blockquote>
	<div>
		{#each speciesData as entry}
			<div>
				<img src={entry.url} alt={entry.name} />
				<h4>Name: {entry.name}</h4>
				<p>Depth: {entry.depth_meters}</p>
				<p>Timestamp: {entry.created_timestamp}</p>
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		width: 100%;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--background-light);
		min-height: 3rem;
		color: white;
		display: grid;
		place-items: center start;
	}
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(10rem, 1fr));
		width: 100%;
		height: fit-content;
	}
</style>
