<script lang="ts">
	import { min } from 'd3';
	import simpleheat from 'simpleheat';
	import { onMount } from 'svelte';
	export let mapBoxKey =
		'pk.eyJ1IjoidGNsdWZmIiwiYSI6ImNsbWpoNGJ3MTAzYm8ycXJ4ZDVieTk3ODYifQ.__pspVfdjrgiM_ACd5jhdg';
	export let lat: number = 36.7842;
	export let long: number = -122.1669;
	export let mapWidth: number = 300;
	export let mapHeight: number = 200;
	export let mapZoom: number = 8;
	export let mapBearing: number = 0;
	export let mapPitch: number = 60;

	let imageURL = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${long},${lat},${mapZoom},${mapBearing},${mapPitch}/${mapWidth}x${mapHeight}?access_token=${mapBoxKey}`;

	let heatMapCanvas: HTMLCanvasElement;
	// minimal heatmap instance configuration
	onMount(() => {
		// now generate some random data
		let points = [];
		let max = 0;
		let min = 0;
		let width = 840;
		let height = 400;
		let len = 200;

		while (len--) {
			let val = Math.floor(Math.random() * 100);
			max = Math.max(max, val);
			let point = [Math.floor(Math.random() * width), Math.floor(Math.random() * height), val];
			points.push(point);
		}

		points = [
			[0, 1, 1],
			[0, 2, 3],
			[1, 2, 3],
			[5, 4, 1]
		];
		// heatmap data format
		//simpleheat(heatMapCanvas).data(points).max(max).draw();
	});
</script>

<main>
	<canvas bind:this={heatMapCanvas} />
	<img src={imageURL} alt="Map of monterey bay" />
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
