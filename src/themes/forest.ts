import { buildThemeInstance, type Theme } from "@/lib/themes";

export const forest: Theme = {
	slug: "forest",
	label: "🌳 Forest",
	instance: buildThemeInstance({
		baseHue: 60,
		baseSaturation: 20,
		colors: {
			primary: [
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
