'use client'

import { useDisclosure, Box } from '@chakra-ui/react'
import { useRef } from 'react'
import type { MapPin } from '@/types/pin'
import { useCurrentLocation } from '@/hooks/centerSpot/useCurrentLocation'
import { useMapPins } from '@/components/Map/hooks/useMapPins'
import { useMapIdle } from '@/components/Map/hooks/useMapIdle'
import { useMapSuggestions } from '@/components/Map/hooks/useMapSuggestions'
import { useMapInteractions } from '@/components/Map/hooks/useMapInteractions'
import { useMapDisplayPins } from '@/components/Map/hooks/useMapDisplayPins'
import InfoWindow from '@/components/InfoWindow/InfoWindow'
import { SuggestList } from '@/components/ui/SuggestList'
import { MapDisplay } from '@/components/ui/MapUI/MapDisplay'
import { LoadingIndicator } from '@/components/ui/LoadingIndicator'
import { LoadScript } from '@react-google-maps/api'
import { GOOGLE_MAPS_API_KEY } from '@/config/env'
import { GOOGLE_MAP_LIBRARIES } from '@/config/googleMaps'
import { GOOGLE_MAPS_MAP_ID } from '@/config/env'

type MyGoogleMapProps = {
  search: string
}

const MyGoogleMap = ({ search }: MyGoogleMapProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const center = useCurrentLocation()
  const mapRef = useRef<google.maps.Map | null>(null)

  const { convertedPins, isLoading, setApiPins } = useMapPins()
  const { suggestPins } = useMapSuggestions(search)
  const { selectedPinId, handleMarkerClick, handleSuggestClick } = useMapInteractions()
  const displayPins = useMapDisplayPins(search, convertedPins)

  const handlePinsReceived = (pins: Parameters<typeof setApiPins>[0]) => {
    setApiPins(pins)
  }
  const { handleIdle } = useMapIdle(handlePinsReceived, mapRef)

  const onMarkerClick = (pin: MapPin) => {
    handleMarkerClick(pin)
    onOpen()
  }

  const onSuggestClick = (pin: MapPin) => {
    handleSuggestClick(pin, mapRef)
    onOpen()
  }

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={GOOGLE_MAP_LIBRARIES}
      mapIds={[GOOGLE_MAPS_MAP_ID]}
    >
      <Box position="relative" w="100%" h="100%" minH={0}>
        <SuggestList
          suggestions={suggestPins}
          onSuggestionClick={onSuggestClick}
          isVisible={!!search && suggestPins.length > 0}
        />
        <MapDisplay
          center={center}
          zoom={15}
          pins={displayPins}
          onMarkerClick={onMarkerClick}
          onMapLoad={(map) => {
            mapRef.current = map
          }}
          onMapIdle={handleIdle}
          mapRef={mapRef}
        />
        <InfoWindow pinId={selectedPinId} isOpen={isOpen} onClose={onClose} />
        {isLoading && <LoadingIndicator />}
      </Box>
    </LoadScript>
  )
}

export default MyGoogleMap
