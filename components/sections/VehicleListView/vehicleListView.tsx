import { QueryResult } from "@/components/layouts";
import { VehicleListItem } from "@/components/organisms";

export const VehicleListView: React.FC<VehicleListViewProps> = ({
	data,
	loading,
	error,
}) => {
	return (
		<div className="name-container flex justify-start items-start w-full h-full flex-col overflow-auto rounded-2xl shadow-sm gap-4">
			<QueryResult loading={loading} error={error} data={data}>
				{data?.result?.results.map((result: any, i: any) => (
					<VehicleListItem
						key={i}
						brand={result.resource.brand || ""}
						model={result.resource.model || ""}
						address={{
							city: result.resource.city || "",
							location: result.resource.location || "",
							streetNumber: result.resource.streetNumber || "",
							latitude: result.resource.latitude,
							longitude: result.resource.longitude,
						}}
						fuel={{
							fuelType: result.resource.fuelType || "",
							fuelLevel: result.resource.fuelLevel || 0,
							fuelRange: result.resource.fuelRange || 0,
							charging: result.resource.charging || false,
							chargeAdapterConnected:
								result.resource.chargeAdapterConnected || false,
							fuelRangeDefault: result.resource.fuelRangeDefault || 0,
							chargeAdapterConnectedSince:
								result.resource.chargeAdapterConnectedSince || 0,
						}}
						availability={result.availability || false}
						price={{
							hourRate: result.resource.price.hourRate || 0,
							kilometerRate: result.resource.price.kilometerRate || 0,
							fuelPerKilometer: result.resource.price.fuelPerKilometer || 0,
							dayRateTotal: result.resource.price.dayRateTotal || 0,
						}}
					/>
				))}
			</QueryResult>
		</div>
	);
};

interface VehicleListViewProps {
	data: any;
	loading: boolean;
	error: Error | null | string;
}
