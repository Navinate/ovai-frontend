import { outputType } from '$lib/Helpers/enums';

export interface apiResponse {
	outputType: string;
	textResponse: string;
	species: speciesData[];
	table: any[];
}

export interface speciesData {
	id: number;
	name: string; //species name
	url: string;
	taxonomy?: string[];
	created_timestamp?: string;
	depth_meters?: string;
	imaging_type?: string;
	last_updated_timestamp?: string;
	last_validation?: string;
	latitude?: string;
	longitude?: string;
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
