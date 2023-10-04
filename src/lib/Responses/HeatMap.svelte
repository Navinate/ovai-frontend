<script lang="ts">
	import simpleheat from 'simpleheat';
	import { onMount } from 'svelte';

	export let mapBoxKey =
		'pk.eyJ1IjoidGNsdWZmIiwiYSI6ImNsbWpoNGJ3MTAzYm8ycXJ4ZDVieTk3ODYifQ.__pspVfdjrgiM_ACd5jhdg';

	export let responseText: string;
	export let positionData: { x: number; y: number }[];

	let heatMapCanvas: HTMLCanvasElement;
	// minimal heatmap instance configuration
	onMount(() => {
		// heatmap data format
		let heat = simpleheat(heatMapCanvas);

		let maxX = Math.max(...positionData.map((obj) => obj.x));
		let minX = Math.min(...positionData.map((obj) => obj.x));
		let maxY = Math.max(...positionData.map((obj) => obj.y));
		let minY = Math.min(...positionData.map((obj) => obj.y));

		let middleX = maxX - (maxX - minX) / 2;
		let middleY = maxY - (maxY - minY) / 2;

		console.log(maxX, maxY, minX, minY);

		let mapWidth = heatMapCanvas.width;
		let mapHeight = ((maxX - minX) / (maxY - minY)) * mapWidth;
		heatMapCanvas.height = mapHeight;

		let imageURL = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${middleY},${Math.floor(
			middleX
		)},8.9,0/${mapWidth}x${mapHeight}?access_token=${mapBoxKey}`;

		const arrayOfArrays = positionData.map((obj) => [
			remap(obj.x, minX, maxX, 0, mapWidth),
			remap(obj.y, minY, maxY, 0, mapHeight)
		]);

		console.table(positionData);
		//@ts-ignore
		heat.data(arrayOfArrays).draw();

		heatMapCanvas.style.backgroundImage = `url(${imageURL})`;

		window.scrollTo(0, document.body.scrollHeight);
	});

	function remap(value: number, from1: number, to1: number, from2: number, to2: number): number {
		return ((value - from1) / (to1 - from1)) * (to2 - from2) + from2;
	}
</script>

<main>
	<h3>Fathom said:</h3>
	<p>{responseText}</p>
	<br />
	<canvas bind:this={heatMapCanvas} />
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

	canvas {
		border-radius: 0.25rem;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
