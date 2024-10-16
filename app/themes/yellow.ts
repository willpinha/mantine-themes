import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const yellow: Theme = {
	label: "🌻 Yellow",
	mantineTheme: createMantineTheme({
		baseHue: 60,
		baseSaturation: 30,
		colors: {
			primary: [
				"#fdfce4",
				"#f8f6d3",
				"#f0ecaa",
				"#e7e17c",
				"#e0d856",
				"#dbd33e",
				"#d9d02f",
				"#c0b820",
				"#aaa317",
				"#928d03",
			],
			secondary: [
				"#fff8e1",
				"#ffefcb",
				"#ffdd9a",
				"#ffca64",
				"#ffba38",
				"#ffb01b",
				"#ffab09",
				"#e39500",
				"#cb8400",
				"#b07100",
			],
			tertiary: [
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
		},
	}),
};
