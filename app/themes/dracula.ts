import { createMantineTheme } from "~/lib/create-mantine-theme";
import { Theme } from "~/lib/theme";

export const dracula: Theme = {
	label: "🧛 Dracula",
	mantineTheme: createMantineTheme({
		baseHue: 230,
		baseSaturation: 10,
		colors: {
			primary: [
				"#f5e9ff",
				"#e4cfff",
				"#c59bff",
				"#a464ff",
				"#8836ff",
				"#7718ff",
				"#6e07ff",
				"#5d00e5",
				"#5200cd",
				"#4600b5",
			],
			secondary: [
				"#ffe8fa",
				"#ffceec",
				"#ff9bd5",
				"#ff64bd",
				"#fe37a9",
				"#fe1c9d",
				"#ff0996",
				"#e40083",
				"#cc0074",
				"#b30065",
			],
			tertiary: [
				"#fff4e1",
				"#ffe8cc",
				"#ffcf9a",
				"#ffb464",
				"#fe9e37",
				"#fe901b",
				"#ff8809",
				"#e37500",
				"#cb6700",
				"#b15700",
			],
		},
	}),
};
