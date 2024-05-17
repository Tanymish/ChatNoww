import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
const __dirname = path.resolve();
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1100,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          Components: [path.resolve(__dirname, 'src/Components/Nav.jsx')],
        },
      },
    },
  },
  plugins: [react()],
})
