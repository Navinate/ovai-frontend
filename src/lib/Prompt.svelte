<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let value = '';
	let placeholder = 'Type your prompt here';

	function submitPrompt() {
		dispatch('submit', value);
		console.log('submitting prompt', value);
	}
</script>

<main>
	<div>
		<!-- svelte-ignore a11y-autofocus -->
		<textarea autofocus bind:value {placeholder} />
		<button on:click={submitPrompt}>
			<img src="/submit.svg" alt="submission arrow" />
		</button>
	</div>
</main>

<style>
	main {
		position: sticky;
		background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			var(--background-dark) 50%,
			var(--background-dark) 100%
		);
		width: 100%;
		margin: 0 auto;
		bottom: 0;
		left: 0;
		display: grid;
		min-height: 12rem;
		overscroll-behavior: none;
	}
	div {
		place-self: center;
		width: 70%;
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 0.8rem;
		background-color: var(--accent-light);
		color: var(--accent-dark);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 2rem rgba(255, 255, 255, 0.2);
	}
	textarea {
		width: 100%;
		height: fit-content;
		padding-top: 1rem;
		font-size: 1rem;
		background-color: transparent;
		border: none;
		resize: none;
		display: grid;
		place-items: center;
	}
	textarea:focus {
		outline: none;
	}
	button {
		background-color: rgba(255, 255, 255, 0.5);
		padding: 0.2rem;
		border-radius: 0.2rem;
		width: 2.5rem;
		height: 2.5rem;
		border: none;
		place-self: center end;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
