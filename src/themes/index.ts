import type { Theme } from "@/lib/themes";
import { christmas } from "./chirstmas";
import { dracula } from "./dracula";
import { forest } from "./forest";

const themes: Theme[] = [dracula, forest, christmas];

export default themes.sort((a, b) => (a.slug > b.slug ? 1 : -1));
