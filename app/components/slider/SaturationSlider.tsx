import { em, Slider, Stack, Text } from "@mantine/core";
import { useSaturation } from "~/hooks/use-saturation";
import { marks } from "~/lib/marks";

export function SaturationSlider() {
	const { saturation, setSaturation } = useSaturation();

	return (
		<Stack gap={em(5)}>
			<Text>Saturation {saturation}%</Text>
			<Slider
				value={saturation}
				onChange={setSaturation}
				step={5}
				marks={marks(5, 100)}
				size="lg"
				styles={{ markLabel: { display: "none" } }}
			/>
		</Stack>
	);
}
