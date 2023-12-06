import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: '>0.5%',
      modernPolyfills: true
    })
  ],
  build: {
    target: 'es2015'
  }
})
