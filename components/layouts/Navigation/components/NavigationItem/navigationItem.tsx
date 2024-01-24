"use client";

// import Image from "next/image";
import { Button } from "react-aria-components";
import { LogoVisual } from "@/components/icons";

export const NavigationItem: React.FC<NavigationItemProps> = ({ title }) => {
	return (
		<Button
			className="name-chip flex justify-center items-center flex-row w-16 h-16 bg-mono-light m-2 shadow-sm rounded-xl"
			onPress={() => console.log("Button Pressed")}
		>
			<LogoVisual size={31} />
		</Button>
	);
};

interface NavigationItemProps {
	title?: string;
}
