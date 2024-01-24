import { useState, useEffect } from "react";
import { fetchVehicles } from "@/api/searchVehicles.server";

// Improved custom hook with error handling
export const useSearchVehicles = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			setError(null);

			try {
				const result = await fetchVehicles();
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
