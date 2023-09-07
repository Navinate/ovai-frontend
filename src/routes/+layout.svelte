<script lang="ts">
	import '../app.css';
</script>

<!-- <header>
	<h1>Header</h1>
	<li>
		{#each ['Home', 'About', 'Other Page'] as link}
			<a href="/"><ul>{link}</ul></a>
		{/each}
	</li>
</header> -->
<slot />

<style>
	header {
		width: 100%;
		top: 0;
		display: grid;
		grid-template-columns: 20% 40% 20% 20%;
		min-height: 3rem;
		background-color: var(--accent-light);
	}

	h1 {
		grid-area: 1 / 2 / 2 / 3;
		place-self: center start;
	}

	li {
		grid-area: 1 / 3 / 2 / 4;
		list-style: none;
		display: flex;
		gap: 1rem;
		align-items: center;
		place-self: center end;
	}
</style>
