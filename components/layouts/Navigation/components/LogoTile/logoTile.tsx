import Image from "next/image";

export const LogoTile: React.FC<LogoTileProps> = ({ title }) => {
	return (
		<div className="name-chip flex justify-center items-center flex-row w-16 h-16 bg-mono-dark m-2 shadow-sm rounded-xl">
			<Image
				src="/my-wheels-logo-visual.svg"
				alt={"logo"}
				width={24}
				height={31}
				priority
			/>
		</div>
	);
};

interface LogoTileProps {
	title?: string;
}
