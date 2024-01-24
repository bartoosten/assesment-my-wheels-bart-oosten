import { Label } from "@/components/atoms";

export const SegmentController = ({
	children,
	label,
}: SegmentControllerProps) => {
	return (
		<div className="flex justify-start items-start flex-col gap-1">
			<Label title={label} />
			<div
				className={
					"flex justify-start items-center h-10 w-60 rounded-xl px-1 bg-mono-dark ml-auto"
				}
			>
				{children}
			</div>
		</div>
	);
};

interface SegmentControllerProps {
	children: React.ReactNode | React.ReactNode[];
	label: string;
}
