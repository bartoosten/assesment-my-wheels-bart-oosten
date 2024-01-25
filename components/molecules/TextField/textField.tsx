import { TextField as TextFieldAria, Input } from "react-aria-components";
import { Label } from "@/components/atoms";

export const TextField: React.FC<TextFieldProps> = ({ label, placeholder }) => {
	return (
		<TextFieldAria className="flex justify-start items-start flex-col gap-1">
			<Label title={label} />
			<Input
				className={
					"h-10 w-full lg:w-80 text-sm font-source-sans-pro tracking-wide border-3 border-mono-dark rounded-xl px-4 bg-mono-light"
				}
				placeholder={placeholder}
			/>
		</TextFieldAria>
	);
};

interface TextFieldProps {
	label: string;
	placeholder: string;
}
