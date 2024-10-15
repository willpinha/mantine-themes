import { useLocalStorage } from "@mantine/hooks";
import { ThemeName } from "~/lib/theme";
import { themes } from "~/themes";

export function useThemes() {
	const [theme, setTheme] = useLocalStorage<ThemeName>({
		key: "theme",
		defaultValue: "dracula",
	});

	return { themes, currentThemeName: theme, setCurrentThemeName: setTheme };
}
