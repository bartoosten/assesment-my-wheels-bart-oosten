export const Header: React.FC<HeaderProps> = ({ left, middle, right }) => {
	return (
		<header className="name-header sticky top-0 h-20 w-full min-h-20 flex flex-row justify-between items-center p-4 bg-transparent backdrop-blur-sm min-h-16 z-90 pr-112">
			<div className="name-left min-w-60 ml-4">{left}</div>
			<div className="name-middle">{middle}</div>
			<div className="name-right min-w-60 mr-4">{right}</div>
		</header>
	);
};

interface HeaderProps {
	left: React.ReactNode;
	middle: React.ReactNode;
	right: React.ReactNode;
}
