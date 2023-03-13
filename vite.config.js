import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/count-timer/',

  build: {
    outDir: "./docs",
    assetsInlineLimit:0,
    emptyOutDir: true,
    manifest: false,
  },
})
