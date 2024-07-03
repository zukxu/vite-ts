// @ts-check
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  rules: {
    // 关闭 prettier 的 ESLint 校验
    'prettier/prettier': 'off',
    // 关闭对 setup props 解构的校验
    'vue/no-setup-props-destructure': 'off',
    // 强制在 script setup 中声明的变量需要使用
    'vue/script-setup-uses-vars': 'error',
    // 关闭对保留组件名称的校验
    'vue/no-reserved-component-names': 'off',
    // 关闭对 @ts-ignore 注释的禁用
    '@typescript-eslint/ban-ts-ignore': 'off',
    // 关闭对显式函数返回类型的要求
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 关闭对使用 any 类型的禁用
    '@typescript-eslint/no-explicit-any': 'off',
    // 关闭对使用 require 语句的禁用
    '@typescript-eslint/no-var-requires': 'off',
    // 关闭对空函数的校验
    '@typescript-eslint/no-empty-function': 'off',
    // 关闭对自定义事件名命名规则的校验
    'vue/custom-event-name-casing': 'off',
    // 关闭对在定义之前使用变量的校验
    'no-use-before-define': 'off',
    // 关闭对 TypeScript 中在定义之前使用变量的校验
    '@typescript-eslint/no-use-before-define': 'off',
    // 关闭对 @ts-comment 注释的禁用
    '@typescript-eslint/ban-ts-comment': 'off',
    // 关闭对使用特定类型（如 {} 和 Object）的禁用
    '@typescript-eslint/ban-types': 'off',
    // 关闭对使用非空断言的禁用
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 关闭对显式模块边界类型的要求
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 关闭对未使用变量的校验
    '@typescript-eslint/no-unused-vars': 'off',
    // 关闭对未使用变量的校验（JavaScript 版）
    'no-unused-vars': 'off',
    // 关闭对函数括号前空格的要求
    'space-before-function-paren': 'off',
    // 关闭对 Vue 属性顺序的校验
    'vue/attributes-order': 'off',
    // 关闭对每个文件一个组件的校验
    'vue/one-component-per-file': 'off',
    // 关闭对 HTML 闭合括号换行的校验
    'vue/html-closing-bracket-newline': 'off',
    // 关闭对每行最多属性数量的校验
    'vue/max-attributes-per-line': 'off',
    // 关闭对多行 HTML 元素内容换行的校验
    'vue/multiline-html-element-content-newline': 'off',
    // 关闭对单行 HTML 元素内容换行的校验
    'vue/singleline-html-element-content-newline': 'off',
    // 关闭对属性命名使用连字符的校验
    'vue/attribute-hyphenation': 'off',
    // 关闭对必需提供默认值的属性的校验
    'vue/require-default-prop': 'off',
    // 关闭对显式声明的 emit 的要求
    'vue/require-explicit-emits': 'off',
    // 关闭对在 transition 内使用 v-if 的要求
    'vue/require-toggle-inside-transition': 'off',
    // 对 HTML 自闭合标签的要求
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // 对于 void 元素，始终使用自闭合标签
          normal: 'never', // 对于常规元素，不使用自闭合标签
          component: 'always' // 对于组件，始终使用自闭合标签
        },
        svg: 'always', // 对于 SVG 元素，始终使用自闭合标签
        math: 'always' // 对于 MathML 元素，始终使用自闭合标签
      }
    ],
    // 关闭对多词组件名称的校验
    'vue/multi-word-component-names': 'off',
    // 关闭对使用 v-html 的禁用
    'vue/no-v-html': 'off'
  },
};
