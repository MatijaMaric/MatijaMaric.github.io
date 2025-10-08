import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    // Generate unique hashes for each build to prevent caching issues
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
