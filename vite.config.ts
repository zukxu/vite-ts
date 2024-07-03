import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import {resolve} from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  compilerOptions: {
    types: ['vite', 'vue'],
    "node": true
  },
  plugins: [vue(), Component({resolvers: [PrimeVueResolver()]})],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 18080,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    // 预加载常用文件
    warmup: {
      clientFiles: ['@/layouts/**/*.vue']
    }
  },
  build: {
    //打包后静态资源文件夹
    assetsDir: 'static',
    outputDir: 'dist',
    rollupOptions: {
      output: {
        /**
         * 打包后分块策略
         */
        vue: ['vue', 'vue-router', 'pinia'],
        primevue: ['primevue', 'primeicons', '@primevue']
      }
    }
  }
});
