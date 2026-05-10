// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: set SITE_URL + BASE_PATH in CI (see .github/workflows/deploy.yml).
// Local dev: leave unset — defaults keep base at `/`.
const site = process.env.SITE_URL ?? "https://the-curated-grid.example.com";
const base =
	process.env.BASE_PATH ?? "/";

// https://astro.build/config
export default defineConfig({
	site,
	base,
	trailingSlash: "always",
	vite: {
		plugins: [tailwindcss()],
	},
});
