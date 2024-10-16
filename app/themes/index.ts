import { ThemeName } from "~/lib/theme";
import { christmas } from "./christmas";
import { dracula } from "./dracula";
import { forest } from "./forest";

export const themes = { christmas, dracula, forest };

export const sortedThemeNames = Object.keys(themes)
	.map((key) => key as ThemeName)
	.sort();
