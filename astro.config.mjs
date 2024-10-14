// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import { baseURL } from "./src/lib/url";

// https://astro.build/config
export default defineConfig({
	site: "https://willpinha.github.io",
	base: import.meta.env.PROD ? "mantine-themes" : "",
	integrations: [react()],
	redirects: {
		"/": `${baseURL()}/dark-forest`,
	},
});
