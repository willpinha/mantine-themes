import { ThemeName } from "~/lib/theme";
import { blue } from "./blue";
import { christmas } from "./christmas";
import { corporate } from "./corporate";
import { dracula } from "./dracula";
import { forest } from "./forest";
import { halloween } from "./halloween";
import { military } from "./military";
import { pink } from "./pink";
import { red } from "./red";
import { synthwave } from "./synthwave";
import { yellow } from "./yellow";

export const themes = {
	christmas,
	dracula,
	forest,
	pink,
	yellow,
	red,
	blue,
	halloween,
	corporate,
	synthwave,
	military,
};

export const sortedThemeNames = Object.keys(themes)
	.map((key) => key as ThemeName)
	.sort();
