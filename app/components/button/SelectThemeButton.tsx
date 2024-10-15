import { Button, em, Group, Paper, useMantineColorScheme } from "@mantine/core";
import { useThemes } from "~/hooks/use-themes";
import { ThemeName } from "~/lib/theme";

type SelectThemeButtonProps = {
	themeName: ThemeName;
};

export function SelectThemeButton({ themeName }: SelectThemeButtonProps) {
	const { themes, currentThemeName, setCurrentThemeName } = useThemes();
	const { colorScheme } = useMantineColorScheme();

	const theme = themes[themeName];
	const isCurrent = currentThemeName === themeName;

	const handleClick = () => {
		if (!isCurrent) {
			setCurrentThemeName(themeName);
		}
	};

	const Color = ({ color }: { color: string }) => (
		<Paper
			withBorder
			style={{
				width: em(15),
				height: em(25),
				background: color,
				borderRadius: em(5),
			}}
		/>
	);

	const ColorGroup = () => {
		const primary = theme.mantineTheme.colors.primary[6];
		const secondary = theme.mantineTheme.colors.secondary[6];
		const tertiary = theme.mantineTheme.colors.tertiary[6];
		const background =
			colorScheme === "light"
				? theme.mantineTheme.white
				: theme.mantineTheme.colors.dark[4];

		return (
			<Group gap={em(5)}>
				<Color color={primary} />
				<Color color={secondary} />
				<Color color={tertiary} />
				<Color color={background} />
			</Group>
		);
	};

	return (
		<Button
			onClick={handleClick}
			variant={isCurrent ? "filled" : "default"}
			rightSection={isCurrent ? null : <ColorGroup />}
		>
			{theme.label}
		</Button>
	);
}
