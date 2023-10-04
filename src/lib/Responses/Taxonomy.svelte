<script lang="ts">
	import type { speciesData } from "$lib/types/responseType";
	import RecursiveTax from "./recursiveTax.svelte";

	export let responseText: string;
	export let speciesArray: speciesData[];
</script>

<main>
		<h3>Fathom said:</h3>
		<p>{responseText}</p>
		<br />
		{#each speciesArray as s}
			<h3>{s.concept}</h3>
			
			<RecursiveTax taxonomy={s.taxonomy}/>
		{/each}
</main>

<style>
	main {
		width: 100%;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--background-light);
		min-height: 5rem;
		color: white;
		display: grid;
		place-items: center start;
	}
</style>
