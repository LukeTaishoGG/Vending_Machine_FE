import type { Preview } from '@storybook/react-vite'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
// import '../src/styles/globals.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
