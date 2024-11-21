import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GROPRO/', // Corrected base path without spaces
  server: {
    host: true,
    port: 5173,
  },
});
