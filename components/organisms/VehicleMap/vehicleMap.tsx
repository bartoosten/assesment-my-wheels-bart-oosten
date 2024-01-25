"use client";

import Image from "next/image";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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
		>
			<Marker longitude={4.895168} latitude={52.370216} anchor="center">
				<Image
					src={`/car-available.png`}
					alt={`marker for vehicle`}
					width={32}
					height={32}
					priority
				/>
			</Marker>
		</Map>
	);
};

interface VehicleMapProps {
	longitude: number;
	latitude: number;
	width: number;
	height: number;
}
