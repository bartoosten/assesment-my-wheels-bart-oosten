import { LogoVisual } from "@/components/icons";

export const LogoTile: React.FC<LogoTileProps> = ({ title }) => {
	return (
		<div className="name-chip flex justify-center items-center flex-row w-16 h-16 bg-mono-dark shadow-sm rounded-xl">
			<LogoVisual size={31} />
		</div>
	);
};

interface LogoTileProps {
	title?: string;
}
