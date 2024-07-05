import {defineConfig, loadEnv, UserConfigFnObject} from 'vite';
import {createVitePlugins} from "./vite/plugins";
import {resolve} from 'path';

const root = process.cwd()
// https://vitejs.dev/config/
const config: UserConfigFnObject = ({mode, command}) => {
  let env: any
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv((process.argv[3] === '--mode' ? process.argv[4] : process.argv[3]), root)
  } else {
    env = loadEnv(mode, root)
  }
  return defineConfig({
    base: env.VITE_BASE_PATH,
    plugins: createVitePlugins(env, isBuild),//将需要使用的插件引入并配置
    resolve: {
      alias: {
        // 设置路径
        '~': resolve(__dirname, './'),
        // 设置别名
        '@': resolve(__dirname, './src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss', '.css']
    },
    server: {
      host: '0.0.0.0',
      port: 18080,
      cors: true,
      proxy: {
        '/api':
          {
            target: 'http://localhost:18081',
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
      minify: 'terser',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            /**
             * 自定义打包后分块策略
             */
            vue: ['vue', 'vue-router', 'pinia'],
            primevue:
              ['primevue', 'primeicons', '@primevue']
          }
        }
      }
    }
  })
}
export default defineConfig(config);
