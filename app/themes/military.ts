import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const military: Theme = {
	label: "🪖 Military",
	mantineTheme: createMantineTheme({
		baseHue: 120,
		baseSaturation: 10,
		colors: {
			primary: [
				"#f5faf0",
				"#e9f3df",
				"#cfe5ba",
				"#b4d892",
				"#9dcc70",
				"#8ec55b",
				"#86c24f",
				"#73ab40",
				"#659837",
				"#55832a",
			],
			secondary: [
				"#f7f3f2",
				"#e8e6e5",
				"#d2c9c6",
				"#bdaaa4",
				"#ab9087",
				"#a17f74",
				"#9d766a",
				"#896459",
				"#7b594e",
				"#6d4b40",
			],
			tertiary: [
				"#f1f4fe",
				"#e4e6ed",
				"#c8cad3",
				"#a9adb9",
				"#9094a3",
				"#7f8496",
				"#777c91",
				"#656a7e",
				"#595e72",
				"#4a5167",
			],
		},
	}),
};
