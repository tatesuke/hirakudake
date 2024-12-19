import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"] // キャッシュ対象のファイルパターン
        },
        manifest: false // PWAにはしない
      })
    ],
    base: process.env.VITE_BASE_PATH || "/",
    server: {
      port: 8585
    }
  };
});
