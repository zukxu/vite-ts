import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import createAutoImport from "./auto-import";
import createSvgIcons from "./svg-icon";

export function createVitePlugins(env, isBuild = false) {
  const vitePlugins = [vue(), Component({resolvers: [PrimeVueResolver()]})]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSvgIcons(isBuild))
  return vitePlugins
}