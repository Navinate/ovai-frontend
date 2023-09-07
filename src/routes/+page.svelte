<script>
	import Prompt from '$lib/Prompt.svelte';
	import ResponseContainer from '$lib/ResponseContainer.svelte';
</script>

<main>
	<ResponseContainer />
	<Prompt />
</main>

<style>
	main {
		width: 100dvw;
		height: 100dvh;
		overscroll-behavior: none;
	}
</style>
