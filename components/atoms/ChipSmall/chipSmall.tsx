export const ChipSmall: React.FC<ChipSmallProps> = ({ title }) => {
	return (
		<div className="name-chip flex flex-row justify-start items-center px-4 py-1 bg-primary-green-shade-800 rounded-md">
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
}
