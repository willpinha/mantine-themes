import { Box, Stack } from "@mantine/core";
import { useInViewport } from "@mantine/hooks";
import type { MetaFunction } from "react-router";
import { ColorShade } from "~/components/color/ColorShade";
import { SaturationSlider } from "~/components/slider/SaturationSlider";

export const meta: MetaFunction = () => {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
};

export default function Route() {
	const { ref, inViewport } = useInViewport();

	return (
		<Stack p="md">
			<SaturationSlider />
			<Box ref={ref}>
				<ColorShade hue={100} />
			</Box>
		</Stack>
	);
}
