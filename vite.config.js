import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true,
  },
  // 👇 Эта часть важна!
  preview: {
    port: 4173,
    open: true,
  }
});