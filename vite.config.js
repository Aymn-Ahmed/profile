import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/profile/', // هذا مهم ليعمل الموقع بشكل صحيح على GitHub Pages
  plugins: [react()],
})
