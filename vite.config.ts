import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('ITS MODE: ', mode);

  return {
    plugins: [preact()],
    base: './',
    // base: mode ? '/portfolio/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/variables.scss";
@import "./src/styles/mixins.scss";`,
        },
      },
    },
  };
});
