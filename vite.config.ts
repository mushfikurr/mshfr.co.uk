import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const USER = "mvshy";
  const ENDPOINT = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${env.VITE_LASTFM_KEY}&format=json`;

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: ENDPOINT,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
