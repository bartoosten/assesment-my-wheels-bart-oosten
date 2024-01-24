"use client";

import Image from "next/image";
import { Button } from "react-aria-components";

export const NavigationItem: React.FC<NavigationItemProps> = ({ title }) => {
	return (
		<Button
			className="name-chip flex justify-center items-center flex-row w-16 h-16 bg-mono-light m-2 shadow-sm rounded-xl"
			onPress={() => console.log("Button Pressed")}
		>
			<Image
				src="/icon-search.svg"
				alt={"logo"}
				width={24}
				height={25}
				priority
			/>
		</Button>
	);
};

interface NavigationItemProps {
	title?: string;
}
