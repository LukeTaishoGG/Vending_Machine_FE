import { GoogleMap, Marker } from '@react-google-maps/api'
import { Box, Text } from '@chakra-ui/react'

type MapSelectorProps = {
  center: { lat: number; lng: number }
  zoom: number
  selectedLocation: { lat: number; lng: number } | null
  onMapClick: (event: google.maps.MapMouseEvent) => void
}

const containerStyle = {
  width: '100%',
  height: '400px',
}

export const MapSelector = ({ center, zoom, selectedLocation, onMapClick }: MapSelectorProps) => {
  return (
    <Box>
      <Text mb={2} fontWeight="bold">
        クリックして場所を選択
      </Text>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onClick={onMapClick}
        options={{
          zoomControl: true,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          scaleControl: false,
          panControl: false,
          rotateControl: false,
          clickableIcons: false,
        }}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
    </Box>
  )
} 