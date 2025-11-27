// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // ⚠️ IMPORTANTE: Pon aquí tu dominio real de Vercel/Netlify.
  // Si no lo tienes aún, pon uno temporal, pero recuérdalo para producción.
  site: "https://juanpe-portfolio.vercel.app",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
