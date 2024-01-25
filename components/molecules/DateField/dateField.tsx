import { TextField as DateFieldAria, Input } from "react-aria-components";
import { Label, LabelVariantType } from "@/components/atoms";

export const DateField: React.FC<DateFieldProps> = ({ label, placeholder }) => {
	return (
		<DateFieldAria className="flex justify-start items-start flex-col gap-1">
			<Label title={label} variant={LabelVariantType.Grey} />
			<Input
				className={
					"h-10 w-full text-sm font-source-sans-pro tracking-wide border-3 border-pure-light rounded-xl px-4 bg-mono-dark"
				}
				placeholder={placeholder}
			/>
		</DateFieldAria>
	);
};

interface DateFieldProps {
	label: string;
	placeholder?: string;
}
