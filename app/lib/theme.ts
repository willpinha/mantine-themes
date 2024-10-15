import { themes } from "~/themes";
import { createMantineTheme } from "./create-mantine-theme";

export type Theme = {
	label: string;
	mantineTheme: ReturnType<typeof createMantineTheme>;
};

export type ThemeName = keyof typeof themes;
