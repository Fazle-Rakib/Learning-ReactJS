import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // increase if CPU is high
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
});
