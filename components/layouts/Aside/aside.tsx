export const Aside: React.FC<AsideProps> = ({ children }) => {
	return (
		<aside className="hidden lg:flex justify-start items-center flex-col max-w-112 h-full sticky top-0 bg-surface-blue rounded-s-2xl z-100">
			{children}
		</aside>
	);
};

interface AsideProps {
	children: React.ReactNode;
}
