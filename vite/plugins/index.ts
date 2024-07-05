import vue from '@vitejs/plugin-vue'
import Component from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import UnoCss from 'unocss/vite'
import createAutoImport from './auto-import'
import createSvgIcons from './svg-icon'

export function createVitePlugins(env, isBuild = false) {
  const vitePlugins = [vue(), Component({ resolvers: [PrimeVueResolver()] }), UnoCss({})]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSvgIcons(isBuild))
  return vitePlugins
}
