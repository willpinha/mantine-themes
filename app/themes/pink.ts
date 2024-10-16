import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const pink: Theme = {
	label: "🌸 Pink",
	mantineTheme: createMantineTheme({
		baseHue: 300,
		baseSaturation: 30,
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
				"#ffe9f6",
				"#ffd1e6",
				"#faa1c9",
				"#f66eab",
				"#f24391",
				"#f02981",
				"#f01879",
				"#d60867",
				"#c0005c",
				"#a9004f",
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
	}),
};
