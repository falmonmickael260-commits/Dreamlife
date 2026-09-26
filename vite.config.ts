import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Configuration du dépôt public.
 *
 * `base: './'` : le site est servi depuis https://<compte>.github.io/Dreamlife/,
 * donc les chemins doivent être relatifs. Comme le routage se fait sur le
 * fragment d'URL (#/destination/…), aucune réécriture côté serveur n'est
 * nécessaire — GitHub Pages sert index.html et l'application fait le reste.
 */
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5175, host: true },
  build: { outDir: 'dist', target: 'es2022' },
});
