import { Label as LabelAria } from "react-aria-components";

export const Label: React.FC<LabelProps> = ({
	title,
	variant = LabelVariantType.Default,
}) => {
	const textColorVariant = colorMap[variant];

	return (
		<LabelAria
			className={`text-xs font-source-sans-pro-bold tracking-wide pl-1 ${textColorVariant}`}
		>
			{title}
		</LabelAria>
	);
};

interface LabelProps {
	title: string | number | boolean;
	variant?: LabelVariantType;
}

export enum LabelVariantType {
	Default = "default",
	PrimaryBlue = "primaryBlue",
	PrimaryGreen = "primaryGreen",
}

const colorMap: { [key in LabelVariantType]: string } = {
	[LabelVariantType.Default]: "text-mono-grey-shade-600",
	[LabelVariantType.PrimaryBlue]: "text-primary-blue",
	[LabelVariantType.PrimaryGreen]: "text-primary-green",
};
