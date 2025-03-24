
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { createRoutesFromFolders } from "@remix-run/v1-route-convention";
import { vitePlugin as remix } from "@remix-run/dev";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
      routes: async (defineRoutes) => {
        return createRoutesFromFolders(defineRoutes);
      },
    }),
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
