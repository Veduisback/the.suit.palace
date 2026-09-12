import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/, not from the
// domain root, so asset URLs need that prefix in production. Locally,
// `vite dev` should still serve from `/`.
// Replace 'veduisback-cinematic-portfolio' below if your repo name differs.
const REPO_NAME = 'veduisback-2026-portfolio'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${REPO_NAME}/` : '/',

  plugins: [react()],

  // pixi.js (and some of its dependency chain, e.g. raf/gsap's PixiPlugin)
  // expects Node's `global` object, which doesn't exist in the browser.
  // Vite doesn't polyfill this automatically the way Webpack used to.
  define: {
    global: 'globalThis',
  },

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
}))