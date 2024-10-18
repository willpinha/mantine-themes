import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const halloween: Theme = {
	label: "🎃 Halloween",
	mantineTheme: createMantineTheme({
		baseHue: 30,
		baseSaturation: 20,
		colors: {
			primary: [
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
			secondary: [
				"#effde7",
				"#e1f8d4",
				"#c3efab",
				"#a2e67e",
				"#87de58",
				"#75d93f",
				"#6bd731",
				"#59be23",
				"#4da91b",
				"#3d920d",
			],
			tertiary: [
				"#faedff",
				"#edd9f7",
				"#d8b1ea",
				"#c186dd",
				"#ae62d2",
				"#a34bcb",
				"#9d3fc9",
				"#8931b2",
				"#7a2aa0",
				"#6b218d",
			],
		},
		headings: { fontFamily: "Risque" },
		defaultRadius: "lg",
	}),
};
