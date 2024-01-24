import { Text, TextVariantType } from "@/components/atoms";

export const DataRow: React.FC<DataRowProps> = ({
	label,
	value,
	darkMode = false,
}) => {
	return (
		<div className="name-data-row flex flex-row justify-between items-center w-full">
			<Text
				text={label}
				variant={darkMode ? TextVariantType.Grey : TextVariantType.Default}
			/>
			{value}
		</div>
	);
};

interface DataRowProps {
	label: string;
	value: React.ReactNode;
	darkMode?: boolean;
}
