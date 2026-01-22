import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";
import { nitro } from "nitro/vite";

export default defineConfig({
  base: "/tanstack-demo-app/",

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  plugins: [
    devtools(),

    // This is what disables SSR for GitHub Pages
    nitro({
      preset: "static",
    }),

    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),

    tanstackStart(),

    viteReact(),
  ],

  build: {
    outDir: "dist",
  },
});
