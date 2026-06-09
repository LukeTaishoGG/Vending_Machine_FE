import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  async viteFinal(config) {
    return mergeConfig(config, {
      esbuild: {
        jsx: 'automatic',
      },
      resolve: {
        alias: {
          '@': path.resolve(dirname, '../src'),
        },
      },
    })
  },
}

export default config
