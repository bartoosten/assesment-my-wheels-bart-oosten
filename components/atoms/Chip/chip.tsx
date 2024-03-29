export const Chip: React.FC<ChipProps> = ({ title, number }) => {
	return (
		<div className="name-chip flex flex-row justify-start items-center px-2 py-1.5 bg-primary-blue-shade-200 rounded-full gap-2">
			<span
				className={
					"name-heading text-primary-blue-dark text-xs font-source-sans-pro uppercase tracking-wider pl-2"
				}
			>
				{title}
			</span>
			{number !== undefined && (
				<div className="px-2 py-1 bg-primary-blue pb-1 flex justify-center items-center rounded-full pr-2">
					<span
						className={
							"name-heading text-pure-light text-xs font-source-sans-pro tracking-widest"
						}
					>
						{number}
					</span>
				</div>
			)}
		</div>
	);
};

interface ChipProps {
	title: string;
	number?: number;
}
