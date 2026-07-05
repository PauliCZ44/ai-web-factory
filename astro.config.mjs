import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.ASTRO_SITE;
const base = process.env.ASTRO_BASE ?? "/";

export default defineConfig({
  ...(site ? { site } : {}),
  base,
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});
