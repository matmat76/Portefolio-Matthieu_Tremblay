import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Scinder les dépendances volumineuses
          if (id.includes('node_modules/three')) {
            return 'three'
          }
          if (id.includes('node_modules/@react-three')) {
            return 'react-three'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'motion'
          }
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log
      }
    },
    sourcemap: false, // Désactiver pour réduire la taille
    assetsInlineLimit: 4096, // Véhicules les petits assets en base64
  }
})
