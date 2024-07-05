import * as process from 'node:process'
import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu({
  ignores: [
    '/node_modules/',
    '/dist/*',
    '/.git/*',
    '/public/*',
  ],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'node/global-require': 'off',
  },

}, unocss.configs.flat)
