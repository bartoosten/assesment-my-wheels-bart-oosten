export const Header: React.FC<HeaderProps> = ({ left, right }) => {
	return (
		<header className="name-header sticky top-0 h-20 w-full min-h-20 flex flex-row justify-between items-center p-1 lg:p-4 min-h-16 border-b border-surface-grey bg-mono-light z-90">
			<div className="name-left ml-4">{left}</div>
			{/* <div className="name-middle">{middle}</div> */}
			<div className="name-right mr-4">{right}</div>
		</header>
	);
};

interface HeaderProps {
	left: React.ReactNode;
	// middle: React.ReactNode;
	right: React.ReactNode;
}
