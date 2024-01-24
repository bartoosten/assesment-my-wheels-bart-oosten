"use client";

import { Button as ButtonAria } from "react-aria-components";

export const Button: React.FC<ButtonProps> = ({ title, handleOnPress }) => {
	return (
		<ButtonAria
			className="name-chip flex justify-center items-center flex-row w-full h-10 bg-primary-green shadow-sm rounded-xl"
			onPress={() => handleOnPress()}
		>
			<span
				className={
					"name-heading text-pure-light text-md font-source-sans-pro capitalize tracking-wide"
				}
			>
				{title}
			</span>
		</ButtonAria>
	);
};

interface ButtonProps {
	title: string;
	handleOnPress: () => void;
}
