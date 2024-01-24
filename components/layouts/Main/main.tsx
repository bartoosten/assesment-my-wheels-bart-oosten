export const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<main className="flex justify-start items-center flex-col w-full h-full pr-112">
			{children}
		</main>
	);
};

interface MainProps {
	children: React.ReactNode;
}
