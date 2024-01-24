"use client";

import { Button } from "react-aria-components";

export const Segment = ({
	index,
	onPress,
	activeIndex,
	children,
}: SegmentProps) => {
	// State
	let isActive = false;

	// Handlers
	if (activeIndex === index) {
		isActive = true;
	}

	return (
		<Button
			onPress={onPress}
			className={`
				flex justify-center items-center w-full h-8 border-2 border-mono-light 
				${index === 0 ? "rounded-s-lg" : "rounded-e-lg"} 
				${isActive ? "bg-mono-dark" : "bg-mono-light"}				
			`}
		>
			<span
				className={`name-segment flex justify-center items-center text-xs font-omnes-medium uppercase tracking-wider gap-2 pr-3 ${
					isActive ? "text-pure-light" : "text-mono-dark"
				}`}
			>
				{children}
			</span>
		</Button>
	);
};

interface SegmentProps {
	index: number;
	activeIndex: number;
	onPress: () => void;
	children: React.ReactNode | string;
}
