import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // User site at https://marychris02.github.io/
  base: '/',
  plugins: [react()],
})
