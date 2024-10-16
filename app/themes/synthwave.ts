import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const synthwave: Theme = {
	label: "🌆 Synthwave",
	mantineTheme: createMantineTheme({
		baseHue: 260,
		baseSaturation: 50,
		colors: {
			primary: [
				"#ffe9ff",
				"#fed1fd",
				"#faa1f6",
				"#f66ef1",
				"#f243eb",
				"#f028e9",
				"#f018e8",
				"#d609ce",
				"#bf00b9",
				"#a700a1",
			],
			secondary: [
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
