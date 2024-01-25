"use client";

import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { VehicleListView, VehicleMapView } from "@/components/sections";
import { useSearchVehicles } from "@/hooks/useSearchVehicles";
import {
	DisplayMode,
	TimeFrame,
	SearchResults,
	SearchResultsAmount,
} from "@/recoil";

export const VehicleDisplay: React.FC = () => {
	const displayModeValue = useRecoilValue(DisplayMode);
	const timeFrameValue = useRecoilValue(TimeFrame);
	const setSearchResultsAmountValue = useSetRecoilState(SearchResultsAmount);
	const setSearchResultsValue = useSetRecoilState(SearchResults);

	// Setting up the search parameters
	const filter = {
		filter: {
			// models: ["Corsa"],
			// onlyAvailable: false,
			// fuelType: "benzine",
			// towbar: true,
			// winterTires: true,
		},
	};

	const timeFrame = timeFrameValue;

	const { data, loading, error } = useSearchVehicles(filter);

	useEffect(() => {
		// TOD0: Update shared state
		setSearchResultsValue(data?.result.results || []);
		setSearchResultsAmountValue(data?.result.results.length || 0);
	}, [data, setSearchResultsAmountValue, setSearchResultsValue]);

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
