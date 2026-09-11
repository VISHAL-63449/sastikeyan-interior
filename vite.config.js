import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use root base for Vercel, use repository name for GitHub Pages
  base: process.env.VERCEL ? '/' : '/sastikeyan-interior/',
  plugins: [react()],
})
