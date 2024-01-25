import { atom } from "recoil";

export const TimeFrame = atom<TimeFrameState>({
	key: "timeFrame",
	default: {
		startDate: getCurrentFormattedDate("09:00"),
		endDate: getCurrentFormattedDate("18:00"),
		adjusted: false,
		namedPrediction: "tomorrow",
	},
});

interface TimeFrameState {
	startDate: string;
	endDate: string;
	adjusted: boolean;
	namedPrediction: string;
}

function getCurrentFormattedDate(time: string): string {
	const currentDate = new Date();

	// Set to tomorrow's date
	currentDate.setDate(currentDate.getDate() + 1);
	const formattedDate = currentDate.toISOString().split("T")[0];
	return `${formattedDate} ${time}`;
}
