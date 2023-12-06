import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['Android >= 4.4', 'iOS >= 12', 'ie >= 11', 'Chrome>=30'],
      modernPolyfills: true
    })
  ],
  // build: {
  //   target: 'es2015'
  // }
})
