import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@common': '/src/components/common',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@data': '/src/data',
      '@routes': '/src/routes',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
    }
  }
})
