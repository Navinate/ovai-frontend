import Vega from '$lib/Responses/Vega.svelte';
import type { VisualizationSpec } from 'vega-embed';

export default function handleVega(target: HTMLElement): Vega {

    let yourVlSpec: VisualizationSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "A random Vega-Lite pie chart",
        "data": {
          "values": [
            {"category": "A", "value": 42},
            {"category": "B", "value": 18},
            {"category": "C", "value": 30},
            {"category": "D", "value": 55},
            {"category": "E", "value": 12}
          ]
        },
        "mark": "arc",
        "encoding": {
          "theta": {"field": "value", "type": "quantitative", "stack": true},
          "color": {"field": "category", "type": "nominal"},
          "tooltip": [
            {"field": "category", "type": "nominal"},
            {"field": "value", "type": "quantitative"}
          ]
        }
      };

	return new Vega({
		target: target,
        props: {
            spec: yourVlSpec
        }
	});
}