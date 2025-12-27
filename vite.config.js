import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import open from 'open'

export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // disable default auto open
  }
})

// After Vite starts, you can manually open your preferred browser
open('http://localhost:5173', { app: { name: 'chrome' } })