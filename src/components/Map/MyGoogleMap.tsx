import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Box,
} from '@chakra-ui/react'
import { useState } from 'react'
import type { MapPin } from './MapPin'
import { mapPins } from './MapPin'
import InfoWindow from './InfoWindow'
const API_KEY = 'AIzaSyCltjvnTyfWxK4QGqDE7bk2jPHRsBlOXNc'

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

const center = {
  lat: 35.6595,
  lng: 139.7005,
}

const MyGoogleMap = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null)

  return (
    <>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          // GoogleMapのオプション
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
          {mapPins.map((pin) => (
            <Marker
              key={pin.id}
              position={{ lat: pin.lat, lng: pin.lng }}
              onClick={() => {
                setSelectedPin(pin)
                onOpen()
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>{selectedPin && <InfoWindow pin={selectedPin} />}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MyGoogleMap
