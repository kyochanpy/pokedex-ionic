/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import env from "vite-plugin-env-compatible";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    env({ prefix: "VITE", mountedPath: "process.env" })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
