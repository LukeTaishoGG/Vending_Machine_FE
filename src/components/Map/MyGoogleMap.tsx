import { useDisclosure, Box } from '@chakra-ui/react'
import { useRef } from 'react'
import type { MapPin } from '../../types/pin'
import { useCurrentLocation } from '../../logic/centerSpot'
import {
  useMapPins,
  useMapIdle,
  useMapSuggxestions,
  useMapInteractions,
  useMapDisplayPins,
} from './hooks/useMapPins'
import InfoWindow from './InfoWindow/InfoWindow'
import { SuggestList } from '../ui/SuggestList/SuggestList'
import { MapDisplay }x from '../ui/MapDisplay/MapDisplay'
import { LoadingIndicator } from '../ui/LoadingIndicator/LoadingIndicator'

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
    <Box position="relative" w="100vw" h="100vh">
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
  )
}

export default MyGoogleMap
