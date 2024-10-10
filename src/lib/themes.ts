import { createTheme, type MantineColorsTuple } from "@mantine/core";

type buildThemeProps = {
	baseHue: number;
	baseSaturation: number;
	colors: {
		primary: MantineColorsTuple;
		secondary: MantineColorsTuple;
		tertiary: MantineColorsTuple;
	};
};

export function buildThemeInstance({
	baseHue,
	baseSaturation,
	colors,
}: buildThemeProps) {
	if (baseHue < 0 || baseHue > 360) {
		throw new Error("Hue must be between 0 and 360");
	}

	if (baseSaturation < 0 || baseSaturation > 100) {
		throw new Error("Saturation must be between 0 and 100");
	}

	return createTheme({
		colors: {
			...colors,
			dark: [
				`hsl(${baseHue} ${baseSaturation}% 80%)`,
				`hsl(${baseHue} ${baseSaturation}% 70%)`,
				`hsl(${baseHue} ${baseSaturation}% 50%)`,
				`hsl(${baseHue} ${baseSaturation}% 40%)`,
				`hsl(${baseHue} ${baseSaturation}% 30%)`,
				`hsl(${baseHue} ${baseSaturation}% 25%)`,
				`hsl(${baseHue} ${baseSaturation}% 13%)`,
				`hsl(${baseHue} ${baseSaturation}% 10%)`,
				`hsl(${baseHue} ${baseSaturation}% 7%)`,
				`hsl(${baseHue} ${baseSaturation}% 4%)`,
			],
			gray: [
				`hsl(${baseHue} 17% 98%)`,
				`hsl(${baseHue} 17% 95%)`,
				`hsl(${baseHue} 16% 90%)`,
				`hsl(${baseHue} 14% 85%)`,
				`hsl(${baseHue} 14% 80%)`,
				`hsl(${baseHue} 10% 70%)`,
				`hsl(${baseHue} 8% 55%)`,
				`hsl(${baseHue} 10% 30%)`,
				`hsl(${baseHue} 10% 25%)`,
				`hsl(${baseHue} 10% 15%)`,
			],
		},
		black: `hsl(${baseHue} 10% 15%)`,
		white: `hsl(${baseHue} ${baseSaturation}% 95%)`,
		primaryColor: "primary",
	});
}

export type Theme = {
	slug: string;
	label: string;
	instance: ReturnType<typeof buildThemeInstance>;
};
