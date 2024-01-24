export const Tile: React.FC<NavigationItemProps> = ({ children }) => {
	return (
		<div className="name-chip flex justify-center items-center flex-row w-10 h-10 bg-mono-light shadow-sm rounded-xl">
			{children}
		</div>
	);
};

interface NavigationItemProps {
	children: React.ReactNode;
}
