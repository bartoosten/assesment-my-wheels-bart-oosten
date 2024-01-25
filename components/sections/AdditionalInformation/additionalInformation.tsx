"use client";

import { useRecoilState } from "recoil";
import { InformationBlock } from "@/components/organisms";
import { DataRow, Switch, DateField } from "@/components/molecules";
import { Heading, HeadingVariantType, Button } from "@/components/atoms";
import { IconSettings, IconPeriod } from "@/components/icons";
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
			<header className="name-header h-20 w-full flex flex-row justify-between items-center p-2 min-h-16 border-b border-primary-blue-shade-200">
				<div className="name-left ml-4"></div>
				<div className="name-right ml-auto mr-4">
					<Heading title="Settings" variant={HeadingVariantType.PrimaryBlue} />
				</div>
			</header>
			<div className="name-information-blocks flex justify-start items-center flex-col w-full p-4 pt-6 gap-4">
				<InformationBlock
					icon={<IconPeriod size={22} fill={"#32AF4B"} />}
					title="Reservation Period"
					content={
						<div className="flex flex-col w-full pt-2 pb-4 gap-4">
							<DateField label="Start period" placeholder="2024-01-23 09:00" />
							<DateField label="End period" placeholder="2024-01-23 18:00" />
						</div>
					}
					payload={
						<div className="flex justify-start items-center flex-row w-full gap-4">
							<Button
								title="Apply Period"
								handleOnPress={() => {
									console.log("Apply Period");
								}}
							/>
							<Button
								title="Update Location"
								handleOnPress={() => getLocation()}
							/>
						</div>
					}
				/>
				<InformationBlock
					icon={<IconSettings size={22} fill={"#32AF4B"} />}
					title="Filters"
					description="Quickly adjust your search by fuel type, availability, and extras like winter tires or towbar with our filters."
					content={
						<div className="flex flex-col w-full py-4 gap-4">
							<DataRow
								label="Availability"
								darkMode
								value={
									<Switch
										isToggled={false}
										onToggle={(status) => {
											console.log("Availability", status);
										}}
									/>
								}
							/>
							<DataRow
								label="Winter Tires"
								darkMode
								value={
									<Switch
										isToggled={false}
										onToggle={(status) => {
											console.log("Winter Tires", status);
										}}
									/>
								}
							/>
							<DataRow
								label="Towbar"
								darkMode
								value={
									<Switch
										isToggled={false}
										onToggle={(status) => {
											console.log("Towbar", status);
										}}
									/>
								}
							/>

							<DataRow
								label="Fuel Type"
								darkMode
								value={
									<Switch
										isToggled={false}
										onToggle={(status) => {
											console.log("Fuel Type", status);
										}}
									/>
								}
							/>
						</div>
					}
					payload={
						<Button
							title="Apply Filters"
							handleOnPress={() => {
								console.log("Apply Filters");
							}}
						/>
					}
				/>
			</div>
		</div>
	);
};
