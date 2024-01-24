import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { VehicleListItem } from "@/components/organisms";

describe("VehicleListItem", () => {
	it("renders correctly with given props", () => {
		const brand = "Tesla";
		const model = "Model 3";
		const address = {
			city: "Amsterdam",
			location: "James Wattstraat",
			streetNumber: "3",
			latitude: 52.349369980429,
			longitude: 4.921294224493,
		};
		const fuel = {
			fuelType: "Electric",
			fuelLevel: 100,
			fuelRange: 400,
			charging: false,
			chargeAdapterConnected: false,
			fuelRangeDefault: 500,
			chargeAdapterConnectedSince: 0,
		};
		const availability = true;
		const price = {
			hourRate: "4.95",
			kilometerRate: "0.46",
			fuelPerKilometer: "0.00",
			dayRateTotal: "49.50",
		};

		const { getByText, getByAltText } = render(
			<VehicleListItem
				brand={brand}
				model={model}
				address={address}
				fuel={fuel}
				availability={availability}
				price={price}
			/>
		);

		// Check if key elements are rendered
		expect(getByText("Tesla Model 3")).toBeInTheDocument();
		expect(getByAltText("side view of Tesla Model 3")).toBeInTheDocument();
		expect(getByText("San Francisco")).toBeInTheDocument();
		expect(getByText("Market Street 123")).toBeInTheDocument();
		expect(getByText("Electric")).toBeInTheDocument();
		expect(getByText("Hour Rate")).toBeInTheDocument();
		expect(getByText("10")).toBeInTheDocument();
	});
});
