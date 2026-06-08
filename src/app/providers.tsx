'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { LoadScript } from '@react-google-maps/api'
import { UserProvider } from '@/Contexts/UserContext'
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from '@/config/env'
import { GOOGLE_MAP_LIBRARIES } from '@/config/googleMaps'

export function Providers({ children }: { children: React.ReactNode }) {
  if (!GOOGLE_MAPS_API_KEY) {
    throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ERROR')
  }

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={GOOGLE_MAP_LIBRARIES}
      mapIds={[GOOGLE_MAPS_MAP_ID]}
    >
      <UserProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </UserProvider>
    </LoadScript>
  )
}
