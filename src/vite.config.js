import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/job-notes/' // <-- Add this line, replacing 'job-notes' with your repo name
})