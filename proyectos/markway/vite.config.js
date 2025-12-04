import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@common': '/src/components/common',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
    }
  }
})
