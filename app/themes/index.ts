import { ThemeName } from "~/lib/theme";
import { blue } from "./blue";
import { christmas } from "./christmas";
import { dracula } from "./dracula";
import { forest } from "./forest";
import { pink } from "./pink";
import { red } from "./red";
import { yellow } from "./yellow";

export const themes = { christmas, dracula, forest, pink, yellow, red, blue };

export const sortedThemeNames = Object.keys(themes)
	.map((key) => key as ThemeName)
	.sort();
