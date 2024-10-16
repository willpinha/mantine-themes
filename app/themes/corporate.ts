import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const corporate: Theme = {
	label: "💼 Corporate",
	mantineTheme: createMantineTheme({
		baseHue: 0,
		baseSaturation: 0,
		colors: {
			primary: [
				"#ecf4ff",
				"#dce4f5",
				"#b9c7e2",
				"#94a8d0",
				"#748dc0",
				"#5f7cb7",
				"#5474b4",
				"#44639f",
				"#3a5890",
				"#2c4b80",
			],
			secondary: [
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
			tertiary: [
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
		},
	}),
};
