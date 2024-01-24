"use client";

import { useRecoilState } from "recoil";
import {
	TextField,
	Select,
	SegmentController,
	Segment,
} from "@/components/molecules";
import { IconModeList, IconModeMap } from "@/components/icons";
import { DisplayMode, DisplayModeTypes } from "@/recoil";

export const VehicleFilter: React.FC = () => {
	// State
	const [displayModeValue, setDisplayModeValue] = useRecoilState(DisplayMode);

	return (
		<div className="name-container flex justify-start items-center w-full flex-col">
			<div className="name-toolbar flex justify-start items-center flex-row w-full px-8 py-2 border-y border-surface-grey gap-2">
				<TextField placeholder="Type to search cars..." label="Search Cars" />
				<Select placeholder={"All categories"} label="Search by Categories" />
				<div className="ml-auto">
					<SegmentController label="Display Mode">
						<Segment
							index={DisplayModeTypes.ModeList}
							activeIndex={displayModeValue}
							onPress={() => setDisplayModeValue(DisplayModeTypes.ModeList)}
						>
							<IconModeList
								size={14}
								fill={
									displayModeValue === DisplayModeTypes.ModeList
										? "#32AF4B"
										: "#222222"
								}
							/>
							List
						</Segment>
						<Segment
							index={DisplayModeTypes.ModeMap}
							activeIndex={displayModeValue}
							onPress={() => setDisplayModeValue(DisplayModeTypes.ModeMap)}
						>
							<IconModeMap
								size={16}
								fill={
									displayModeValue === DisplayModeTypes.ModeMap
										? "#32AF4B"
										: "#222222"
								}
							/>
							Map
						</Segment>
					</SegmentController>
				</div>
			</div>
		</div>
	);
};
