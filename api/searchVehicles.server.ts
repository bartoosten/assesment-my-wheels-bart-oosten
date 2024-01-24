"use server";

const API_URL = "https://php-api.mywheels.dev/api/";

export async function fetchVehicles() {
	const response = await fetch(API_URL, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"x-ref": "http://localhost:3000",
			"X-Simple-Auth-App-Id":
				"1_4ufl98675y8088ko4k80wow4soo0g8cog8kwsssoo4k4ggc84k",
		},
		body: JSON.stringify({
			id: 0,
			jsonrpc: "2.0",
			method: "search.map",
			params: {
				filter: {},
				locationPoint: {
					latitudeMax: 56,
					latitudeMin: 48,
					longitudeMax: 9,
					longitudeMin: 1,
				},
			},
		}),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
}
