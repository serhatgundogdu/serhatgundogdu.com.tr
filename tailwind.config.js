const theme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', ...theme.fontFamily.sans],
				poppins: ['"Poppins"', ...theme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
