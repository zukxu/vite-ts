/**
 * @description svg-icon插件
 */
import * as process from 'node:process'
import { resolve } from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default function createSvgIcons(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/assets/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild,
  })
}
