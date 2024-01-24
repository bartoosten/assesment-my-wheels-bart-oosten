"use client";

import Map from "react-map-gl";

export const VehicleMap: React.FC<VehicleMapProps> = ({
	longitude,
	latitude,
	width,
	height,
}) => {
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
	const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_STYLE;

	return (
		<Map
			mapboxAccessToken={mapboxToken}
			initialViewState={{
				longitude: longitude,
				latitude: latitude,
				zoom: 14,
			}}
			style={{ width: width, height: height }}
			mapStyle={mapStyle}
		/>
	);
};

interface VehicleMapProps {
	longitude: number;
	latitude: number;
	width: number;
	height: number;
}
