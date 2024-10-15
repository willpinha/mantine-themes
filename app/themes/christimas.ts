import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const christimas: Theme = {
	label: "🎄 Christmas",
	mantineTheme: createMantineTheme({
		baseHue: 140,
		baseSaturation: 30,
		colors: {
			primary: [
				"#ffecec",
				"#f8d9d9",
				"#eab2b1",
				"#dd8886",
				"#d26462",
				"#cb4d4b",
				"#c9413f",
				"#b23331",
				"#a02b2a",
				"#8c2122",
			],
			secondary: [
				"#e6ffee",
				"#d3f9e0",
				"#a8f2c0",
				"#7aea9f",
				"#54e382",
				"#3bdf70",
				"#2bdd66",
				"#1bc455",
				"#0bae4a",
				"#00973c",
			],
			tertiary: [
				"#fcf8e7",
				"#f4efd8",
				"#e7ddb4",
				"#d9ca8b",
				"#cebb69",
				"#c7b053",
				"#c3ab46",
				"#ac9637",
				"#99852e",
				"#847320",
			],
		},
	}),
};
