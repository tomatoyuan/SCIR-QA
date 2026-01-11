import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 默认使用根路径，适配Vercel；GitHub Pages需要运行 npm run deploy
  base: '/',
})

