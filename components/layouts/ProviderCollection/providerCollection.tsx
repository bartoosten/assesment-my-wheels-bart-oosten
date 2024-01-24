"use client";

import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const ProviderCollection: React.FC<ProviderCollectionProps> = ({
	children,
}) => {
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</RecoilRoot>
	);
};

interface ProviderCollectionProps {
	children: React.ReactNode;
}
