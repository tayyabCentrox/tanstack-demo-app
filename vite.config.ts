import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  base: "/tanstack-demo-app/",

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    conditions: ["browser"],
  },

  plugins: [
    devtools(),

    TanStackRouterVite({
      // Exclude server-side routes from client build
      exclude: ["**/**.server-funcs.**", "**/**.ssr.**"],
    }),

    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),

    viteReact(),
  ],

  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["node:fs", "node:async_hooks"],
    },
  },
});
