"use client";

import { useState } from "react";
import { Switch as SwitchAria } from "react-aria-components";

export const Switch: React.FC<SwitchProps> = ({ isToggled, onToggle }) => {
	const [isSwitchToggled] = useState(isToggled);

	return (
		<SwitchAria onChange={onToggle}>
			<div
				className={`flex flex-row justify-start items-center px-4 py-1 rounded-full border-2 ${
					isSwitchToggled
						? "border-primary-blue bg-primary-blue"
						: "border-mono-grey bg-mono-dark"
				}`}
			>
				<div
					className={`indicator w-3 h-3 rounded-full shadow-md 
					${isSwitchToggled ? "bg-mono-dark" : "bg-primary-blue"}`}
				/>
			</div>
		</SwitchAria>
	);
};

interface SwitchProps {
	isToggled: boolean;
	onToggle: (isToggled: boolean) => void;
}
