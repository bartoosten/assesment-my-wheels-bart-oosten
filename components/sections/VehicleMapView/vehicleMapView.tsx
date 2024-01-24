"use client";

import { useRecoilValue } from "recoil";
import useElementSize from "@/hooks/useElementSize";
import { UserLocation } from "@/recoil";
import { VehicleMap } from "@/components/organisms";

export const VehicleMapView: React.FC<VehicleMapViewProps> = ({
	data,
	loading,
	error,
}) => {
	const size = useElementSize("mapBoxContainer");
	const userLocation = useRecoilValue(UserLocation);

	return (
		<div
			id="mapBoxContainer"
			className="name-container flex justify-center items-center w-full h-full flex-col overflow-auto rounded-2xl shadow-sm bg-mono-grey-shade-100"
		>
			{/* The key make updates the map when userLocation is changed */}
			<VehicleMap
				key={`${userLocation.latitude}-${userLocation.longitude}-${size.width}-${size.height}`}
				longitude={userLocation.longitude}
				latitude={userLocation.latitude}
				width={size.width}
				height={size.height}
			/>
		</div>
	);
};

interface VehicleMapViewProps {
	data: any;
	loading: boolean;
	error: Error | null | string;
}
