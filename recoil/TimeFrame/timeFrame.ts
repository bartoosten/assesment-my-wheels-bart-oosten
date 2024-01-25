import { atom } from "recoil";

export const TimeFrame = atom<TimeFrameState>({
	key: "timeFrame",
	default: {
		startDate: getCurrentFormattedDate("09:00"),
		endDate: getCurrentFormattedDate("18:00"),
	},
});

interface TimeFrameState {
	startDate: string;
	endDate: string;
}

function getCurrentFormattedDate(time: string): string {
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString().split("T")[0];
	return `${formattedDate} ${time}`;
}
