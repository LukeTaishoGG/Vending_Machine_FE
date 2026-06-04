// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  ...tseslint.config(
    { ignores: ['dist', 'node_modules'] }, //ESLintがチェック対象からnode_modulesディレクトリを除外
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      prettier,
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off', //JSX を使うファイルでimport　React from 'react'を書かなくてもエラーにならないようにする
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
    },
  ),
  {
    files: ['*.stories.@(ts|tsx|js)'],
    ...storybook.configs['flat/recommended'],
  },
]
