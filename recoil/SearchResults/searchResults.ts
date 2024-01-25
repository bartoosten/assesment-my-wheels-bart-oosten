import { atom } from "recoil";

export const SearchResults = atom<number>({
	key: "searchResults",
	default: 0,
});
