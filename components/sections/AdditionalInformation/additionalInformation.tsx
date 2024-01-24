"use client";

import { useRecoilState } from "recoil";
import { InformationBlock } from "@/components/organisms";
import { DataRow, Switch } from "@/components/molecules";
import {
	Heading,
	HeadingVariantType,
	Button,
	DataValue,
	DataValueType,
} from "@/components/atoms";
import { IconSettings } from "@/components/icons";
import useGeolocation from "@/hooks/useGeoLocation";
import { UserLocation } from "@/recoil";

export const AdditionalInformation: React.FC = () => {
	const { location, error, getLocation } = useGeolocation();
	const [userLocation, setUserLocation] = useRecoilState(UserLocation);

	if (
		location &&
		(userLocation.latitude !== location.coords.latitude ||
			userLocation.longitude !== location.coords.longitude)
	) {
		setUserLocation({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});
	}

	if (error) {
		console.log(error);
	}

	return (
		<div className="flex justify-start items-center flex-col w-full">
			<header className="name-header h-20 w-full flex flex-row justify-between items-center p-4 min-h-16 border-b border-primary-blue-shade-200">
				<div className="name-left ml-4">
					<Heading
						title="Additional Information"
						variant={HeadingVariantType.PrimaryBlue}
					/>
				</div>
				<div className="name-right ml-auto mr-4">
					{/* TODO: Maybe add a hide */}
				</div>
			</header>
			<div className="name-information-blocks flex justify-start items-center flex-col w-full px-8 py-4 gap-4 ">
				<InformationBlock
					icon={<IconSettings size={16} fill={"#32AF4B"} />}
					title="Optional Filters"
					description="Quickly adjust your search by fuel type, availability, and extras like winter tires or towbar with our filters."
					content={
						<div className="flex flex-col w-full py-4 gap-4">
							<DataRow label="Fuel Type" darkMode value={<Switch />} />
							<DataRow label="Availability" darkMode value={<Switch />} />
							<DataRow label="Winter Tires" darkMode value={<Switch />} />
							<DataRow label="Towbar" darkMode value={<Switch />} />
						</div>
					}
					payload={
						<Button
							title="Clear Filters"
							handleOnPress={() => {
								console.log("Clear Filters");
							}}
						/>
					}
				/>
				<InformationBlock
					icon={<IconSettings size={16} fill={"#32AF4B"} />}
					title="Your Location"
					description="Unlock a personalized experience with by sharing you location, you get to see the cars closest to you."
					content={
						<div className="flex flex-col w-full py-4 gap-4">
							<DataRow
								label="Latitude"
								darkMode
								value={
									<DataValue
										value={userLocation.latitude}
										variant={DataValueType.PrimaryBlue}
									/>
								}
							/>
							<DataRow
								label="Longitude"
								darkMode
								value={
									<DataValue
										value={userLocation.longitude}
										variant={DataValueType.PrimaryBlue}
									/>
								}
							/>
						</div>
					}
					payload={
						<Button
							title="Share my Location"
							handleOnPress={() => getLocation()}
						/>
					}
				/>
			</div>
		</div>
	);
};
