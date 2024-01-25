"use client";

import { useRecoilValue } from "recoil";
import { Chip } from "@/components/atoms";
import { SearchResultsAmount as SearchResultsAmountSate } from "@/recoil";

export const SearchResultsAmount: React.FC = () => {
	const searchResultsAmountValue = useRecoilValue(SearchResultsAmountSate);

	return <Chip title="Cars Found" number={searchResultsAmountValue} />;
};
