import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    assetsInlineLimit: 0,
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: ({ name }) => {
          // Output src/ files to dist/ root
          if (['content', 'popup', 'service'].includes(name)) return '[name].js';
        },
        chunkFileNames: 'assets/[name].js',
        assetFileNames: ({ name }) => {
          if (name === 'manifest.json') return 'manifest.json';
          if (['popup.css', 'setting.css'].includes(name)) return name;
          if (name.startsWith('assets/images')) return name; // Preserve assets/ structure
          return 'assets/images/[name].[ext]';
        }
      },
      input: {
        //popup: resolve(__dirname, 'popup.html'), // Dùng tên 'popup' vite gom tat ca files css trong popup.html thanh 1 file ten la popup.css
        popup: resolve(__dirname, 'popup.html'),
        content: resolve(__dirname, 'src/content.js'),
        'service': resolve(__dirname, 'src/service.js') // thêm dòng này

      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'assets/images/cursor.png', dest: 'assets/images' },
        { src: 'assets/manifest_icons/icon128.png', dest: 'assets/manifest_icons' },
        { src: 'manifest.json', dest: '.' }
      ]
    })
  ]
});