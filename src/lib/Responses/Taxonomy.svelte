<script lang="ts">
	export let responseText: string;
	export let data: {name: string, rank: string}[];
	data = data.reverse();
</script>

<main>
		<h3>Fathom said:</h3>
		<p>{responseText}</p>
		<br/>
	<ul>
		{#each data as d, i}
			<li style="padding-left: {i*10}px;">{d.name} : {d.rank}</li>
		{/each}
	</ul>
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
