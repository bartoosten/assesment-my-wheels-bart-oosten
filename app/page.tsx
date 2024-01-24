import { PageWrapper, Header, Main, Aside, Footer } from "@/components/layouts";
import {
	VehicleFilter,
	VehicleDisplay,
	AdditionalInformation,
} from "@/components/sections";
import { Heading, HeadingVariantType, Chip } from "@/components/atoms";
import { LogoTextual } from "@/components/icons";

export default function Home() {
	return (
		<PageWrapper>
			<Header
				left={<LogoTextual size={120} />}
				middle={
					<Heading
						title="Search Vehicles"
						variant={HeadingVariantType.Default}
					/>
				}
				right={""}
			/>
			<Main>
				<VehicleFilter />
				<VehicleDisplay />
			</Main>
			<Footer>
				<Chip title="Cars Found" />
			</Footer>
			<Aside>
				<AdditionalInformation />
			</Aside>
		</PageWrapper>
	);
}
