import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactToastMessage',
      formats: ['es', 'cjs'],
      fileName: (format) => `react-toast-message.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    cssCodeSplit: true,
  },
});
