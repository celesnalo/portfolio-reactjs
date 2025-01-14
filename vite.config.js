import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  resolve: {
    alias: {
      'prop-types': 'prop-types/prop-types.js',
      'warning': 'warning/warning.js'
    }
  },
  optimizeDeps: {
    exclude: ['react-pdf'],
    include: ['prop-types', 'warning']
  }
})