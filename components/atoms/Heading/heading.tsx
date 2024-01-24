export const Heading: React.FC<HeadingProps> = ({
	title,
	variant = HeadingVariantType.Default,
}) => {
	const textColorVariant = colorMap[variant];

	return (
		<h2
			className={`name-heading text-lg font-omnes-medium ${textColorVariant}`}
		>
			{title}
		</h2>
	);
};

interface HeadingProps {
	title: string;
	variant?: HeadingVariantType;
}

export enum HeadingVariantType {
	Default = "default",
	Light = "light",
	PrimaryBlue = "primaryBlue",
	PrimaryGreen = "primaryGreen",
}

const colorMap: { [key in HeadingVariantType]: string } = {
	[HeadingVariantType.Default]: "text-mono-dark",
	[HeadingVariantType.Light]: "text-pure-light",
	[HeadingVariantType.PrimaryBlue]: "text-primary-blue",
	[HeadingVariantType.PrimaryGreen]: "text-primary-green",
};
