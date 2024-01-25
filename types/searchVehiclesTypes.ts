export interface RequestPayload {
	jsonrpc: string;
	id: number;
	method: string;
	params: {
		locationPoint: {
			latitudeMax: number;
			latitudeMin: number;
			longitudeMax: number;
			longitudeMin: number;
		};
		filter: FilterType;
	};
}

export interface FilterType {
	models: string[];
	onlyAvailable: boolean;
	fuelType: "benzine" | "elektrisch";
	towbar: boolean;
	winterTires: boolean;
}

export interface ResponsePayload {
	result: {
		results: Result[];
	};
}

export interface Result {
	resource: Resource;
	availability: any; // Replace 'any' with the correct type if known
	shouldDischarge: boolean;
	distance: number | null; // Replace with the correct type if known
}

export interface Resource {
	id: number;
	registrationPlate: string;
	alias: string;
	resourceType: string;
	brand: string | null;
	model: string | null;
	color: string | null;
	fuelType: string | null;
	numberOfSeats: number;
	location: string;
	streetNumber: string | null;
	latitude: number;
	longitude: number;
	advertisement: any; // Replace 'any' with the correct type if known
	created: string;
	city: string;
	locktype: string;
	parkingType: string;
	fuelLevel: number | null;
	fuelRange: number | null;
	charging: boolean;
	chargeAdapterConnected: boolean | null;
	fuelRangeDefault: number;
	chargeAdapterConnectedSince: string | null;
	price: Price;
	options: Options;
	locktypes: string[];
	favorite: boolean;
	rating_totals: any; // Replace 'any' with the correct type if known
}

interface Price {
	id: number;
	hourRate: string;
	kilometerRate: string;
	fuelPerKilometer: string;
	dayRateTotal: string;
}

interface Options {
	id: number;
	automatic: boolean;
	winterTires: boolean;
	towbar: boolean;
}
