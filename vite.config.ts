import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ["lucide-react"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: "dist",
    },
    server: {
        historyApiFallback: true, // ✅ Ensures navigation works
    }
});
