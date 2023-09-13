<script lang="ts">
	import UserInput from './Responses/UserInput.svelte';
	import Text from './Responses/Text.svelte';
	import handleImage from './Handlers/ImageHandler';
	import handleText from './Handlers/TextHandler';

	let container: HTMLElement;

	export function addResponse(inputtedText: string) {
		let userInput = new UserInput({ target: container, props: { text: inputtedText } });

		switch (inputtedText) {
			case 'image':
				handleImage(container);
				break;
			default:
				handleText(container, inputtedText);
				break;
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
