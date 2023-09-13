<script lang="ts">
	import Prompt from '$lib/Prompt.svelte';
	import ResponseContainer from '$lib/ResponseContainer.svelte';

	let container: ResponseContainer;

	function handleResponse(e: any) {
		console.log('response received', e.detail);
		container.addResponse(e.detail);
	}
</script>

<main>
	<ResponseContainer bind:this={container} />
	<Prompt on:submit={handleResponse} />
</main>

<style>
	main {
		width: 100dvw;
		height: 100dvh;
		overscroll-behavior: none;
	}
</style>
