"use client";

import { useRecoilValue } from "recoil";
import Image from "next/image";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { SearchResults, UserLocation } from "@/recoil";

export const VehicleMap: React.FC<VehicleMapProps> = ({
	longitude,
	latitude,
	width,
	height,
}) => {
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
	const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_STYLE;
	const searchResultsValue = useRecoilValue(SearchResults);
	const userLocationValue = useRecoilValue(UserLocation);

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
			{searchResultsValue.map((vehicle: any, i: any) => (
				<Marker
					longitude={vehicle.resource.longitude}
					latitude={vehicle.resource.latitude}
					anchor="center"
					key={i}
				>
					<Image
						src={`/car-available.png`}
						alt={`marker for vehicle`}
						width={32}
						height={32}
						priority
					/>
				</Marker>
			))}
			<Marker
				longitude={userLocationValue.longitude}
				latitude={userLocationValue.latitude}
				anchor="center"
			>
				<Image
					src={`/user.png`}
					alt={`marker for user`}
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
