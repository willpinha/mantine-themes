import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const red: Theme = {
	label: "🌹 Red",
	mantineTheme: createMantineTheme({
		baseHue: 0,
		baseSaturation: 30,
		colors: {
			primary: [
				"#ffe8e9",
				"#ffd1d1",
				"#fba0a0",
				"#f76d6d",
				"#f44141",
				"#f22625",
				"#f21616",
				"#d8070b",
				"#c10007",
				"#a90003",
			],
			secondary: [
				"#fff0e4",
				"#ffe0cf",
				"#fac0a1",
				"#f69e6e",
				"#f28043",
				"#f06e27",
				"#f06418",
				"#d6530c",
				"#bf4906",
				"#a73c00",
			],
			tertiary: [
				"#ffeaec",
				"#fcd4d7",
				"#f4a7ac",
				"#ec777e",
				"#e64f57",
				"#e3353f",
				"#e22732",
				"#c91a25",
				"#b41220",
				"#9e0419",
			],
		},
	}),
};
