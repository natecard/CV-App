import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CV-App/',
  plugins: [react()],
  indexHTML: './index.html',
  jsx: 'react',
  assetsDir: './static',
  rollupInputOptions: {
    input: './src/main.jsx',
  },
});
