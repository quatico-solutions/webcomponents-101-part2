import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src/example/step-1",
    build: {
        lib: {
            entry: "index.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
        outDir: "../../../dist/example/step-1",
        assetsDir: "../resources",
        emptyOutDir: true,
    },
});
