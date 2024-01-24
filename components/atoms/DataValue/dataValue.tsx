export const DataValue: React.FC<DataValueProps> = ({
	value,
	variant = DataValueType.Default,
}) => {
	const textColorVariant = colorMap[variant];

	return (
		<span
			className={`name-data-value text-sm font-omnes-medium break-words leading-6 ${textColorVariant}`}
		>
			{value}
		</span>
	);
};

interface DataValueProps {
	value: string | number;
	variant?: DataValueType;
}

export enum DataValueType {
	Default = "default",
	Light = "light",
	PrimaryBlue = "primaryBlue",
	PrimaryGreen = "primaryGreen",
}

const colorMap: { [key in DataValueType]: string } = {
	[DataValueType.Default]: "text-mono-dark",
	[DataValueType.Light]: "text-pure-light",
	[DataValueType.PrimaryBlue]: "text-primary-blue",
	[DataValueType.PrimaryGreen]: "text-primary-green",
};
