export const HeadingSmall: React.FC<HeadingSmallProps> = ({
	title,
	variant = HeadingSmallVariantType.Default,
}) => {
	const textColorVariant = colorMap[variant];

	return (
		<h3
			className={`name-heading text-md font-omnes-medium ${textColorVariant}`}
		>
			{title}
		</h3>
	);
};

interface HeadingSmallProps {
	title: string;
	variant?: HeadingSmallVariantType;
}

export enum HeadingSmallVariantType {
	Default = "default",
	Light = "light",
	PrimaryBlue = "primaryBlue",
	PrimaryGreen = "primaryGreen",
}

const colorMap: { [key in HeadingSmallVariantType]: string } = {
	[HeadingSmallVariantType.Default]: "text-mono-dark",
	[HeadingSmallVariantType.Light]: "text-pure-light",
	[HeadingSmallVariantType.PrimaryBlue]: "text-primary-blue",
	[HeadingSmallVariantType.PrimaryGreen]: "text-primary-green",
};
