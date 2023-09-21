<script lang="ts">
	import { min } from 'd3';
	import simpleheat from 'simpleheat';
	import { onMount } from 'svelte';
	export let mapBoxKey =
		'pk.eyJ1IjoidGNsdWZmIiwiYSI6ImNsbWpoNGJ3MTAzYm8ycXJ4ZDVieTk3ODYifQ.__pspVfdjrgiM_ACd5jhdg';
	export let lat: number = 36.7842;
	export let long: number = -122.1669;
	export let mapWidth: number = 400;
	export let mapHeight: number = 400;
	export let mapZoom: number = 8;
	export let mapBearing: number = 0;
	export let mapPitch: number = 0;

	let imageURL = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${long},${lat},${mapZoom},${mapBearing},${mapPitch}/${mapWidth}x${mapHeight}?access_token=${mapBoxKey}`;

	let heatMapCanvas: HTMLCanvasElement;
	// minimal heatmap instance configuration
	onMount(() => {
		// now generate some random data
		let points = [];
		let max = 0;
		let min = 0;
		let len = 200;

		while (len--) {
			let val = Math.floor(Math.random() * 100);
			max = Math.max(max, val);
			let point = [
				Math.floor(Math.random() * mapWidth),
				Math.floor(Math.random() * mapHeight),
				val
			];
			points.push(point);
		}

		// heatmap data format
		let heat = simpleheat(heatMapCanvas);
		// @ts-ignore
		heat.data(points).max(max).draw();

		heatMapCanvas.style.backgroundImage = `url(${imageURL})`;
	});
</script>

<main>
	<h3>Fathom said:</h3>
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
