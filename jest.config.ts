module.exports = {
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/components/$1",
	},
};
