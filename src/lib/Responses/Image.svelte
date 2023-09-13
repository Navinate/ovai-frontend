<script lang="ts">
	export let src: string;
</script>

<main>
	<h3>Fathom said:</h3>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img {src} alt="random photo taken from picsum.photos" />
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
</style>
