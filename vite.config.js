import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  },
  // 👇 ВАЖНО: добавь это
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // 👇 ВАЖНО: поддержка SPA роутинга
  base: '/',
})