import { outputType } from '$lib/Helpers/enums';
import type { VisualizationSpec } from 'vega-embed';

export interface apiResponse {
	outputType: string;
	responseText: string;
	species?: speciesData[];
	vegaSchema?: VisualizationSpec;
	table?: any[];
}

export interface speciesData {
	id: number;
	concept: string; //species name
	name?: string;
	url?: string;
	taxonomy?: string[];
	created_timestamp?: string;
	depth_meters?: string;
	imaging_type?: string;
	last_updated_timestamp?: string;
	last_validation?: string;
	latitude?: number;
	longitude?: number;
	media_type?: string;
	submitter?: string;
	timestamp?: string;
	valid?: string;
	contributors_email?: string;
	altitude?: string;
	oxygen_ml_l?: string;
	pressure_dbar?: string;
	salinity?: string;
	temperature_celsius: string;
	x?: number; //x location on image
	y?: number; //y location on image
	width?: number; //width on image
	height?: number; //height on image
}
