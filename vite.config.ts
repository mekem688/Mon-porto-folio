import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages needs the repo name as base path.
// Vercel & Netlify use root "/".
const base = process.env.GITHUB_ACTIONS ? "/Mon-porto-folio/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});

