export const Text: React.FC<TextProps> = ({
	text,
	variant = TextVariantType.Default,
}) => {
	const textColorVariant = colorMap[variant];

	return (
		<p
			className={`name-text text-sm font-omnes break-words leading-6 ${textColorVariant}`}
		>
			{text}
		</p>
	);
};

interface TextProps {
	text: string | number;
	variant?: TextVariantType;
}

export enum TextVariantType {
	Default = "default",
	Light = "light",
	Grey = "grey",
	PrimaryBlue = "primaryBlue",
	PrimaryGreen = "primaryGreen",
}

const colorMap: { [key in TextVariantType]: string } = {
	[TextVariantType.Default]: "text-mono-dark",
	[TextVariantType.Light]: "text-pure-light",
	[TextVariantType.Grey]: "text-pure-light-shade-600",
	[TextVariantType.PrimaryBlue]: "text-primary-blue",
	[TextVariantType.PrimaryGreen]: "text-primary-green",
};
