import VegaVisual from '$lib/Responses/VegaVisual.svelte';
import type { VisualizationSpec } from 'vega-embed';

export default function handleVega(target: HTMLElement): VegaVisual {

    const yourVlSpec: VisualizationSpec = {
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

    const heatSpec: VisualizationSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A heatmap representing random data points.",
      "data": {
          "values": [{'x': 5.568244573417872, 'y': 6.357474003422014},
          {'x': 2.5810979203768203, 'y': 2.983086863860336},
          {'x': 5.783864587173415, 'y': 5.41637031742961},
          {'x': 5.847357046420053, 'y': 6.884502055894634},
          {'x': 4.171079147246935, 'y': 8.363947610127349}]
      },
      "mark": "rect",
      "encoding": {
          "x": {
              "field": "x",
              "type": "quantitative",
              "bin": {"maxbins": 10},
              "axis": {
                  "title": "X Axis"
              }
          },
          "y": {
              "field": "y",
              "type": "quantitative",
              "bin": {"maxbins": 10},
              "axis": {
                  "title": "Y Axis"
              }
          },
          "color": {
              "aggregate": "count",
              "type": "quantitative",
              "legend": {
                  "title": "Number of Points"
              }
          }
      }
  }
  

	return new VegaVisual({
		target: target,
        props: {
            spec: yourVlSpec 
        }
	});
}