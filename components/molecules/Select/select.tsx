import {
	Button,
	ListBox,
	ListBoxItem,
	Popover,
	Select as SelectAria,
	SelectValue,
} from "react-aria-components";
import { Label } from "@/components/atoms";
import { IconSelect } from "@/components/icons";

export const Select: React.FC<SelectProps> = ({ placeholder, label }) => {
	return (
		<SelectAria
			className="flex justify-start items-start flex-col gap-1"
			placeholder={placeholder}
		>
			<Label title={label} />
			<Button className="h-10 w-60 flex justify-between items-center font-source-sans-pro tracking-wide border-3 border-mono-dark rounded-xl pl-4 pr-2 bg-mono-light">
				<SelectValue />
				<span
					className="h-6 w-6 flex justify-center items-center bg-mono-dark rounded-md"
					aria-hidden="true"
				>
					<IconSelect size={8} fill={"#32AF4B"} />
				</span>
			</Button>
			<Popover>
				<ListBox className="w-60 border-2 border-primary-blue rounded-xl px-4">
					<ListBoxItem>Aardvark</ListBoxItem>
					<ListBoxItem>Cat</ListBoxItem>
					<ListBoxItem>Dog</ListBoxItem>
					<ListBoxItem>Kangaroo</ListBoxItem>
					<ListBoxItem>Panda</ListBoxItem>
					<ListBoxItem>Snake</ListBoxItem>
				</ListBox>
			</Popover>
		</SelectAria>
	);
};

interface SelectProps {
	label: string;
	placeholder: string;
}
