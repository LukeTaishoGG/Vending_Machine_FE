import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/react'
import InfoWindowContent from '@/components/Map/InfoWindow/InfoWindowContent'

type InfoWindowProps = {
  pinId: number | null
  isOpen: boolean
  onClose: () => void
}

const InfoWindow = ({ pinId, isOpen, onClose }: InfoWindowProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>{pinId && <InfoWindowContent pinId={pinId} />}</DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default InfoWindow
