import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This maps "@" to the client directory
      "@": path.resolve(__dirname, "./"),
    },
  },
});