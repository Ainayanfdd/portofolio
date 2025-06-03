import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/portofolio/", // Ganti dengan nama repositori GitHub Anda
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8085,
  },
});
