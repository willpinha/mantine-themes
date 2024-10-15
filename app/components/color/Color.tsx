import { CopyButton, Text, UnstyledButton } from "@mantine/core";
import { useSaturation } from "~/hooks/use-saturation";

type ColorProps = {
	hue: number;
	lightness: number;
};

function acessibleTextColor(
	hue: number,
	saturation: number,
	lightness: number
) {
	return `hsl(${hue}, ${saturation}%, ${lightness > 50 ? 5 : 95}%)`;
}

function ParameterHSL({
	letter,
	value,
}: {
	letter: "H" | "S" | "L";
	value: number;
}) {
	return (
		<Text>
			{letter}
			{value}
		</Text>
	);
}

export function Color({ hue, lightness }: ColorProps) {
	const { saturation } = useSaturation();
	const stringHSL = `hsl(${hue} ${saturation}% ${lightness}%)`;

	return (
		<CopyButton value={stringHSL}>
			{({ copied, copy }) => (
				<UnstyledButton
					p="xs"
					onClick={copy}
					style={{
						backgroundColor: stringHSL,
						color: acessibleTextColor(hue, saturation, lightness),
					}}
				>
					{copied ? "Copied" : stringHSL}
				</UnstyledButton>
			)}
		</CopyButton>
	);
}
