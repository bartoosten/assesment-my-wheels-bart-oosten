import { atom } from "recoil";

export const SearchResultsAmount = atom<number>({
	key: "searchResultsAmount",
	default: 0,
});
