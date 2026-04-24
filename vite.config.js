// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // SUSTITUYE 'nombre-de-tu-repo' por el nombre exacto de tu repositorio en GitHub
  base: '/reto_fullstack/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})
