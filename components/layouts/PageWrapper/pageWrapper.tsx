import { Navigation } from "@/components/layouts";

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
	return (
		<section className="name-wrapper flex justify-start items-start flex-col-reverse lg:flex-row h-[calc(100lvh-3rem)] w-[calc(100vw-3rem)] gap-6">
			<Navigation />
			<div className="name-container relative flex justify-start items-start flex-row h-full w-full  rounded overflow-scroll no-scrollbar bg-mono-light shadow-sm rounded">
				{children}
			</div>
		</section>
	);
};

interface PageWrapperProps {
	children: React.ReactNode;
}
