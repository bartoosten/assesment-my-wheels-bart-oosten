"use client";

import React, { useState } from "react";
import { Switch as SwitchAria } from "react-aria-components";

export const Switch: React.FC = () => {
	const [isToggled, setIsToggled] = useState(false);

	const toggleSwitch = () => {
		setIsToggled(!isToggled);
	};

	return (
		<SwitchAria onChange={toggleSwitch}>
			<div
				className={`flex flex-row justify-start items-center px-4 py-1 rounded-full border-2 ${
					isToggled
						? "border-primary-blue bg-primary-blue"
						: "border-mono-grey bg-mono-dark"
				}`}
			>
				<div
					className={`indicator w-3 h-3 rounded-full shadow-md 
					${isToggled ? "bg-mono-dark" : "bg-primary-blue"}`}
				/>
			</div>
		</SwitchAria>
	);
};
