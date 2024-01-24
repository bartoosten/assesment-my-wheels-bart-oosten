export const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<main className="flex justify-start items-center flex-col w-full h-full">
			{children}
		</main>
	);
};

interface MainProps {
	children: React.ReactNode;
}
