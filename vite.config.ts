import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GH Pages previews serve under /Restogo/; production (Cloudflare, root domain) uses '/'.
// Set BASE=/Restogo/ in the preview workflow only. Mismatching these is what broke Ray's.
export default defineConfig({
  base: process.env.BASE ?? '/',
  plugins: [react(), tailwindcss()],
});
