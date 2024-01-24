import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"omnes-regular": ["Omnes-Regular", "sans-serif"],
				"omnes-light": ["Omnes-Light", "sans-serif"],
				"omnes-medium": ["Omnes-Medium", "sans-serif"],
				"omnes-semibold": ["Omnes-SemiBold", "sans-serif"],
				"source-sans-pro-regular": ["SourceSansPro-Regular", "sans-serif"],
				"source-sans-pro-bold": ["SourceSansPro-Bold", "sans-serif"],
				"source-sans-pro-light": ["SourceSansPro-Light", "sans-serif"],
				"source-sans-pro-semibold": ["SourceSansPro-Semibold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
