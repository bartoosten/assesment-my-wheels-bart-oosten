"use client";

import { useRecoilValue } from "recoil";
import { Chip } from "@/components/atoms";
import { SearchResults as SearchResultsState } from "@/recoil";

export const SearchResults: React.FC = () => {
	const searchResultsValue = useRecoilValue(SearchResultsState);

	return <Chip title="Cars Found" number={searchResultsValue} />;
};
