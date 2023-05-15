import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), pluginRewriteAll(), tsconfigPaths()],
    server: {
        port: 9000,
    },
});
