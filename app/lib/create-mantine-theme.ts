import {
	createTheme,
	DEFAULT_THEME,
	DefaultMantineColor,
	MantineColorsTuple,
	mergeMantineTheme,
} from "@mantine/core";

type CustomColor = "primary" | "secondary" | "tertiary" | DefaultMantineColor;

/**
 * Adds the primary, secondary and tertiary colors to the MantineThemeColors interface for type safety
 *
 * @see https://mantine.dev/theming/colors/#add-custom-colors-types
 */
declare module "@mantine/core" {
	export interface MantineThemeColorsOverride {
		colors: Record<CustomColor, MantineColorsTuple>;
	}
}

type createMantineThemeProps = {
	baseHue: number;
	baseSaturation: number;
	colors: {
		primary: MantineColorsTuple;
		secondary: MantineColorsTuple;
		tertiary: MantineColorsTuple;
	};
};

/**
 * Creates a Mantine theme with the specified base hue/saturation and primary, secondary and
 * tertiary colors.
 *
 * Base hue and saturation comes from HSL and are used to generate the dark and gray colors of the
 * theme, which are used for shadows, borders, backgrounds, etc.
 *
 * To generate primary, secondary and tertiary colors, you can use the
 * {@link https://mantine.dev/colors-generator Colors generator} from Mantine. Just copy and paste
 * the colors array (10 colors)
 *
 * @param baseHue - The base hue of the theme (between 0 and 360)
 * @param baseSaturation - The base saturation of the theme (between 0 and 100)
 * @param colors - The primary, secondary and tertiary colors of the theme
 *
 * @returns The Mantine theme that you can use on MantineProvider
 */
export function createMantineTheme({
	baseHue,
	baseSaturation,
	colors,
}: createMantineThemeProps) {
	if (baseHue < 0 || baseHue > 360) {
		throw new Error("Hue must be between 0 and 360");
	}

	if (baseSaturation < 0 || baseSaturation > 100) {
		throw new Error("Saturation must be between 0 and 100");
	}

	return mergeMantineTheme(
		DEFAULT_THEME,
		createTheme({
			colors: {
				...colors,
				dark: [
					`hsl(${baseHue} ${baseSaturation}% 95%)`,
					`hsl(${baseHue} ${baseSaturation}% 80%)`,
					`hsl(${baseHue} ${baseSaturation}% 70%)`,
					`hsl(${baseHue} ${baseSaturation}% 60%)`,
					`hsl(${baseHue} ${baseSaturation}% 30%)`,
					`hsl(${baseHue} ${baseSaturation}% 25%)`,
					`hsl(${baseHue} ${baseSaturation}% 13%)`,
					`hsl(${baseHue} ${baseSaturation}% 10%)`,
					`hsl(${baseHue} ${baseSaturation}% 8%)`,
					`hsl(${baseHue} ${baseSaturation}% 5%)`,
				],
				gray: [
					`hsl(${baseHue} 17% 98%)`,
					`hsl(${baseHue} 17% 95%)`,
					`hsl(${baseHue} 16% 90%)`,
					`hsl(${baseHue} 14% 75%)`,
					`hsl(${baseHue} 14% 70%)`,
					`hsl(${baseHue} 10% 60%)`,
					`hsl(${baseHue} 8% 55%)`,
					`hsl(${baseHue} 10% 30%)`,
					`hsl(${baseHue} 10% 25%)`,
					`hsl(${baseHue} 10% 15%)`,
				],
			},
			black: `hsl(${baseHue} 10% 10%)`,
			white: `hsl(${baseHue} 10% 95%)`,
			primaryColor: "primary",
		})
	);
}
