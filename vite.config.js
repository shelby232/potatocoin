import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
   base: '/potatocoin/', // замените "имя-репозитория" на имя вашего репозитория
  build: {
    outDir: 'dist' // или 'build', если вы изменили директорию для сборки
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react()],
})
