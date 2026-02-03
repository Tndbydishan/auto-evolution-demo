import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        booking: resolve(__dirname, 'booking.html'),
        services: resolve(__dirname, 'services.html'),
        training: resolve(__dirname, 'training.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});