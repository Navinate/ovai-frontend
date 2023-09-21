<script lang="ts">
	import UserInput from '$lib/Responses/UserInput.svelte';
	import handleImage from '$lib/Handlers/ImageHandler';
	import handleText from '$lib/Handlers/TextHandler';
	import handleHeatMap from '$lib/Handlers/HeatMapHandler';
	import handleTaxonomy from '$lib/Handlers/TaxonomyHandler';

	let container: HTMLElement;

	export function addResponse(inputtedText: string) {
		let userInput = new UserInput({ target: container, props: { text: inputtedText } });

		function detectInputCategory(category: string): boolean {
			return inputtedText.toLowerCase().includes(category);
		}
		if (detectInputCategory('image')) {
			handleImage(container);
		} else if (detectInputCategory('heatmap')) {
			handleHeatMap(container);
		} else if (detectInputCategory('taxonomy')) {
			handleTaxonomy(container, inputtedText);
		} else {
			handleText(container, inputtedText);
		}

		//scroll to bottom of the page
		window.scrollTo(0, document.body.scrollHeight);
	}
</script>

<main bind:this={container} />

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
</style>
