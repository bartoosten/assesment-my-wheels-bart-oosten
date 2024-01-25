import { atom } from "recoil";

export const SearchResults = atom<any[]>({
	key: "searchResults",
	default: [],
});
