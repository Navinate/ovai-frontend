<script lang="ts">
</script>

<main>
	<div>A</div>
	<div>B</div>
	<div>C</div>
	<div>D</div>
	<div>E</div>
	<div>F</div>
	<div>G</div>
	<div>H</div>
	<div>I</div>
	<div>J</div>
	<div>K</div>
	<div>L</div>
	<div>M</div>
</main>

<style>
	main {
		min-height: 100dvh;
		display: flex;
		flex-flow: column;
		justify-content: flex-end;
		gap: 1rem;
		padding: 1rem 20%;
		overflow: scroll;
		overscroll-behavior: contain;
	}

	div {
		width: 100%;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--background-light);
		min-height: 8rem;
		color: white;
	}
</style>
