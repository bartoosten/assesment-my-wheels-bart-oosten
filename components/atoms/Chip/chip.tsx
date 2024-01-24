export const Chip: React.FC<ChipProps> = ({ title }) => {
	return (
		<div className="name-chip flex flex-row justify-start items-center px-4 py-1.5 bg-primary-blue-shade-200 rounded-full">
			<span
				className={
					"name-heading text-primary-blue-dark text-xs font-source-sans-pro uppercase tracking-wider"
				}
			>
				{title}
			</span>
		</div>
	);
};

interface ChipProps {
	title: string;
}
