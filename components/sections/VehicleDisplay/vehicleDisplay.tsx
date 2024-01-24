"use client";

import { useRecoilValue } from "recoil";
import { VehicleListView, VehicleMapView } from "@/components/sections";
import { DisplayMode } from "@/recoil";
import { useSearchVehicles } from "@/hooks/useSearchVehicles";

export const VehicleDisplay: React.FC = () => {
	const displayModeValue = useRecoilValue(DisplayMode);
	const searchParams = {
		method: "search.map",
		params: {
			locationPoint: {
				latitudeMax: 56,
				latitudeMin: 48,
				longitudeMax: 9,
				longitudeMin: 1,
			},
			filter: {
				// onlyAvailable: false,
				// models: ["Corsa"],
				// fuelType: "benzine",
				// towbar: true,
				// winterTires: true,
			},
		},
	};

	const { data, loading, error } = useSearchVehicles();

	return (
		<div className="name-container flex justify-start items-start w-full h-full flex-col px-8 py-4">
			{displayModeValue === 0 && (
				<VehicleListView data={data} loading={loading} error={error} />
			)}
			{displayModeValue === 1 && (
				<VehicleMapView data={data} loading={loading} error={error} />
			)}
		</div>
	);
};
