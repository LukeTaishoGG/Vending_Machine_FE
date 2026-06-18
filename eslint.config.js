// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default [
  ...tseslint.config(
    { ignores: ['dist', 'node_modules', '.next', 'next-env.d.ts', 'storybook-static'] },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off', //JSX を使うファイルでimport　React from 'react'を書かなくてもエラーにならないようにする
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
      },
    },
  ),
  {
    files: ['*.stories.@(ts|tsx|js)'],
    ...storybook.configs['flat/recommended'],
  },
]
