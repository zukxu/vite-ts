/**
 * @description 自动引入插件
 */
import autoImport from 'unplugin-auto-import/vite';

export default function createAutoImport() {
  return autoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
    dts: false
  });
}
