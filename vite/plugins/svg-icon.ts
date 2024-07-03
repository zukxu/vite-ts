/**
 * @description svg-icon插件
 */
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import {resolve} from "path";

export default function createSvgIcons(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/assets/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild
  })
}