export const ChipSmall: React.FC<ChipSmallProps> = ({
	title,
	variant = ChipVariantType.Default,
}) => {
	const backgroundColorVariant = colorMap[variant];

	return (
		<div
			className={`name-chip flex flex-row justify-start items-center px-4 py-1 rounded-md ${backgroundColorVariant}`}
		>
			<span
				className={
					"name-heading text-pure-light text-xs font-source-sans-pro capitalize tracking-wider"
				}
			>
				{title}
			</span>
		</div>
	);
};

interface ChipSmallProps {
	title: string;
	variant?: ChipVariantType;
}

export enum ChipVariantType {
	Default = "default",
	Availability = "availability",
}

const colorMap: { [key in ChipVariantType]: string } = {
	[ChipVariantType.Default]: "bg-primary-green-shade-800",
	[ChipVariantType.Availability]: "bg-accent-yellow",
};
