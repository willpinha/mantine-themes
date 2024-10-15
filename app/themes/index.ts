import { ThemeName } from "~/lib/theme";
import { christimas } from "./christimas";
import { dracula } from "./dracula";
import { forest } from "./forest";

export const themes = { christimas, dracula, forest };

export const sortedThemeNames = Object.keys(themes)
	.map((key) => key as ThemeName)
	.sort();
