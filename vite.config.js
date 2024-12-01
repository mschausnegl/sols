import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        klondike: 'klondike-solitaire.html',
        klondikeTurn3: 'klondike-turn-3.html',
        solitaireDraw3: 'solitaire-draw-3.html'
      }
    }
  }
});
