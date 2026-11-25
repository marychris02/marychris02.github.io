import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Matches https://marychris02.github.io/MyPortfolio/
  base: '/MyPortfolio/',
  plugins: [react()],
})
