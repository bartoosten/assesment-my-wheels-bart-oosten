export const Footer: React.FC<FooterProps> = ({ children }) => {
	return (
		<footer className="name-footer sticky bottom-0 h-20 w-full min-h-20 flex flex-row justify-center items-center p-4 bg-mono-light min-h-16 z-90 pr-112">
			{children}
		</footer>
	);
};

interface FooterProps {
	children: React.ReactNode;
}
