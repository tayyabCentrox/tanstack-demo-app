import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  base: "/",

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // Stub out Node.js modules for browser
      "node:async_hooks": fileURLToPath(
        new URL("./src/lib/stubs/async-hooks.ts", import.meta.url),
      ),
      "node:fs": fileURLToPath(
        new URL("./src/lib/stubs/fs.ts", import.meta.url),
      ),
    },
    conditions: ["browser"],
  },

  plugins: [
    devtools(),

    TanStackRouterVite(),

    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),

    viteReact(),
  ],

  build: {
    outDir: "dist",
  },
});
