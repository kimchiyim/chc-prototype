import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change 'chc-prototype' to match your GitHub repo name
  base: '/chc-prototype/',
})
