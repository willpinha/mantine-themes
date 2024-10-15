import { Stack } from "@mantine/core";
import { Color } from "./Color";

type ColorShadeProps = {
	hue: number;
};

export function ColorShade({ hue }: ColorShadeProps) {
	return (
		<Stack gap={0}>
			{[...Array(100)].map((_, i) => (
				<Color key={i} hue={hue} lightness={i} />
			))}
		</Stack>
	);
}
