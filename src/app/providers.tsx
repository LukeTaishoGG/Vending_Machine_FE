'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@/Contexts/UserContext'
import { SearchProvider } from '@/Contexts/SearchContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <SearchProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </SearchProvider>
    </UserProvider>
  )
}
