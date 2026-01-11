import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 根据环境设置base路径：Vercel使用 '/', GitHub Pages使用 '/SCIR-QA/'
  base: process.env.VERCEL ? '/' : '/SCIR-QA/',
})

