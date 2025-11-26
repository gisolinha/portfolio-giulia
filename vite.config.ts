import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Usar './' permite que o site funcione em qualquer subpasta ou nome de repositório
  base: "./",
})