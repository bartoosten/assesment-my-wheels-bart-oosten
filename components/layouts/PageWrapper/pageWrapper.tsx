import { Navigation } from "@/components/layouts";

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
	return (
		<section className="name-wrapper fixed inset-0 flex justify-start items-start flex-row h-[calc(100vh-3rem)] w-[calc(100vw-0.25rem)]">
			<Navigation />
			<div className="name-container relative w-full flex justify-start items-center flex-col h-full rounded overflow-scroll no-scrollbar bg-mono-light m-6 shadow-sm rounded translate-x-1.5">
				{children}
			</div>
		</section>
	);
};

interface PageWrapperProps {
	children: React.ReactNode;
}
