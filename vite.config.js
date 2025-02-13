import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  proxy: {
    // Proxy requests to json-server running on port 3001
    "/api": {
      target: "http://localhost:3001",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },

    // Proxy requests to Netlify functions
    "/.netlify/functions": {
      target: "http://localhost:8888", // Netlify Dev server port
      changeOrigin: true,
    },
  },
});
