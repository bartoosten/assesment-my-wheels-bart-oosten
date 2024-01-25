import { useState, useEffect } from "react";
import { fetchVehicles } from "@/api/searchVehicles.server";
import { FilterType, ResponsePayload } from "@/types/searchVehiclesTypes";

// Improved custom hook with error handling
export const useSearchVehicles = (filter: FilterType) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<ResponsePayload | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			setError(null);

			try {
				const result = await fetchVehicles(filter);
				setData(result);
			} catch (err) {
				if (err instanceof Error) {
					setError(err);
				}
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return { data, loading, error };
};
