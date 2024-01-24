export const Aside: React.FC<AsideProps> = ({ children }) => {
	return (
		<aside className="absolute flex justify-start items-center flex-col max-w-112 bg-surface-blue top-0 bottom-0 right-0 rounded-s-2xl z-100">
			{children}
		</aside>
	);
};

interface AsideProps {
	children: React.ReactNode;
}
