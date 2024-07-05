/**
 * @description 自动引入插件
 */
import AutoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    exclude: ['**/dist/**'],
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
  })
}
