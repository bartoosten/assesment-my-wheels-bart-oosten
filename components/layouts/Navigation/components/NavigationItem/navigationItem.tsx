"use client";

import { Button } from "react-aria-components";
import { IconLocation } from "@/components/icons";

export const NavigationItem: React.FC<NavigationItemProps> = ({ title }) => {
	return (
		<Button
			className="name-chip flex justify-center items-center flex-row w-16 h-16 bg-mono-light m-2 shadow-sm rounded-xl"
			onPress={() => console.log("Button Pressed")}
		>
			<IconLocation size={18} fill={"#1B70DE"} />
		</Button>
	);
};

interface NavigationItemProps {
	title?: string;
}
