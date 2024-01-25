"use client";

import { useRecoilValue } from "recoil";
import { VehicleListView, VehicleMapView } from "@/components/sections";
import { DisplayMode, TimeFrame } from "@/recoil";
import { useSearchVehicles } from "@/hooks/useSearchVehicles";

export const VehicleDisplay: React.FC = () => {
	const displayModeValue = useRecoilValue(DisplayMode);
	const timeFrameValue = useRecoilValue(TimeFrame);

	// Setting up the search parameters
	const filter = {
		filter: {
			// models: ["Corsa"],
			// onlyAvailable: false,
			// fuelType: "benzine",
			// towbar: true,
			// winterTires: true,
			timeFrame: timeFrameValue,
		},
	};

	const { data, loading, error } = useSearchVehicles(filter);

	return (
		<div className="name-container flex justify-start items-start w-full h-full flex-col px-4 lg:px-8 py-4">
			{displayModeValue === 0 && (
				<VehicleListView data={data} loading={loading} error={error} />
			)}
			{displayModeValue === 1 && (
				<VehicleMapView data={data} loading={loading} error={error} />
			)}
		</div>
	);
};
