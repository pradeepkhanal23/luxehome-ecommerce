import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
  server: {
    port: 3000,
  },
  proxy: {
    // Proxy requests to Netlify functions
    "/.netlify/functions": {
      target: "http://localhost:8888", // Netlify Dev server port
      changeOrigin: true,
    },
  },
});
