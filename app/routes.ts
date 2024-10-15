import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout } from "@react-router/dev/routes";

export const routes: RouteConfig = [
	layout("layouts/select-theme-layout.tsx", [index("routes/home.tsx")]),
];
