import { PageWrapper, Header, Main, Aside, Footer } from "@/components/layouts";
import {
	VehicleFilter,
	VehicleDisplay,
	AdditionalInformation,
	SearchResults,
} from "@/components/sections";
import { Heading, HeadingVariantType } from "@/components/atoms";
import { LogoTextual } from "@/components/icons";

export default function Home() {
	return (
		<PageWrapper>
			<div className="name-wrapper flex justify-start items-center flex-col w-full h-full">
				<Header
					left={<LogoTextual size={120} />}
					right={
						<Heading
							title="Search Vehicles"
							variant={HeadingVariantType.Default}
						/>
					}
				/>
				<Main>
					<VehicleFilter />
					<VehicleDisplay />
				</Main>
				<Footer>
					<SearchResults />
				</Footer>
			</div>
			<Aside>
				<AdditionalInformation />
			</Aside>
		</PageWrapper>
	);
}
