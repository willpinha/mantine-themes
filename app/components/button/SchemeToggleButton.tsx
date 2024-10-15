import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";

export function SchemeToggleButton() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Tooltip label="Toggle color scheme">
			<ActionIcon variant="default" onClick={toggleColorScheme}>
				{colorScheme === "light" ? <TbSun /> : <TbMoon />}
			</ActionIcon>
		</Tooltip>
	);
}
