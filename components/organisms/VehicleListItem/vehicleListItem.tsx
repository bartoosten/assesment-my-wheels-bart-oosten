import Image from "next/image";
import { DataRow } from "@/components/molecules";
import {
	Heading,
	HeadingVariantType,
	HeadingSmall,
	HeadingSmallVariantType,
	Label,
	ChipSmall,
	DataValue,
	DataValueType,
	Tile,
} from "@/components/atoms";
import { IconLocation } from "@/components/icons";

export const VehicleListItem: React.FC<VehicleListItemProps> = ({
	brand,
	model,
	address,
	fuel,
	availability,
	price,
}) => {
	return (
		<div className="flex w-full justify-start items-start flex-col lg:flex-row shadow-sm rounded-xl bg-pure-light px-4 py-2 gap-2">
			<div className="flex w-full lg:w-3/12 justify-start items-center flex-col p-4 gap-4">
				<div className="flex w-full justify-center items-center flex-row gap-2">
					<Heading title={brand || ""} variant={HeadingVariantType.Default} />
					<HeadingSmall
						title={model || ""}
						variant={HeadingSmallVariantType.PrimaryGreen}
					/>
				</div>
				<Image
					src={`https://mywheels.nl/static/cars/tesla-model-3/default.png`}
					alt={`side view of ${brand} ${model}`}
					width={400}
					height={185}
					priority
				/>
				<ChipSmall title={fuel.fuelType} />
			</div>
			<div className="flex w-full lg:w-6/12 justify-start items-start flex-col p-4 gap-1">
				<div className="flex w-full justify-start items-center flex-row gap-2">
					<Tile>
						<IconLocation size={16} fill={"#32AF4B"} />
					</Tile>
					<Heading
						title={address.city || ""}
						variant={HeadingVariantType.Default}
					/>
					<HeadingSmall
						title={address.location + " " + address.streetNumber || ""}
						variant={HeadingSmallVariantType.PrimaryBlue}
					/>
				</div>
				{/* <Label title={address.latitude} />
				<Label title={address.longitude} /> */}
			</div>
			<div className="flex w-full lg:w-3/12 justify-start items-start flex-col p-4 gap-2">
				<Heading title="Price" variant={HeadingVariantType.PrimaryBlue} />
				<DataRow
					label="Hour Rate"
					value={
						<DataValue
							value={price.hourRate}
							variant={DataValueType.PrimaryGreen}
						/>
					}
				/>
				<DataRow
					label="Kilometer Rate"
					value={
						<DataValue
							value={price.kilometerRate}
							variant={DataValueType.PrimaryGreen}
						/>
					}
				/>
				<DataRow
					label="Fuel Per Kilometer"
					value={
						<DataValue
							value={price.fuelPerKilometer}
							variant={DataValueType.PrimaryGreen}
						/>
					}
				/>
				<DataRow
					label="Day Rate Total"
					value={
						<DataValue
							value={price.dayRateTotal}
							variant={DataValueType.PrimaryGreen}
						/>
					}
				/>
				<Label title={availability} />
			</div>
		</div>
	);
};

interface VehicleListItemProps {
	brand: string;
	model: string;
	address: AddressType;
	fuel: FuelType;
	availability: boolean;
	price: PriceType;
}

type AddressType = {
	city: string;
	location: string;
	streetNumber: string;
	latitude: number;
	longitude: number;
};

type FuelType = {
	fuelType: string;
	fuelLevel: number;
	fuelRange: number;
	charging: boolean;
	chargeAdapterConnected: boolean;
	fuelRangeDefault: number;
	chargeAdapterConnectedSince: number | string;
};

type PriceType = {
	hourRate: number | string;
	kilometerRate: number | string;
	fuelPerKilometer: number | string;
	dayRateTotal: number | string;
};
