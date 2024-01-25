"use server";

const MY_WHEELS_API_URL = process.env.NEXT_PUBLIC_MY_WHEELS_API_URL || "";
const LOCAL_HOST = process.env.NEXT_PUBLIC_LOCAL_HOST || "";
const MY_WHEELS_AUTH_APP_ID =
	process.env.NEXT_PUBLIC_MY_WHEELS_AUTH_APP_ID || "";

export async function fetchVehicles(filter: any) {
	const response = await fetch(MY_WHEELS_API_URL, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"x-ref": LOCAL_HOST,
			"X-Simple-Auth-App-Id": MY_WHEELS_AUTH_APP_ID,
		},
		body: JSON.stringify({
			id: 0,
			jsonrpc: "2.0",
			method: "search.map",
			params: {
				locationPoint: {
					latitudeMax: 56,
					latitudeMin: 48,
					longitudeMax: 9,
					longitudeMin: 1,
				},
				filter: filter,
			},
		}),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
}
