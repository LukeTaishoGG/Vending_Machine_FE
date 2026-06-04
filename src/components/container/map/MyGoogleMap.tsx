import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import type { MapPin } from '../../../dummyPin/MapPin'
import { mapPins } from '../../../dummyPin/MapPin'
import InfoWindow from './mapInfo'
import { useCurrentLocation } from '../../../logic/centerSpot'
import { useMapIdle } from '../../../hooks/useMapIdle'
import { useMapPins } from '../../../hooks/useMapPins'
import { useMapSuggestions } from '../../../hooks/useMapSuggestions'
import { useMapInteractions } from '../../../hooks/useMapInteractions'
import { Box } from '@chakra-ui/react'
import { SuggestList } from '../../ui/SuggestList/SuggestList'
import { MapDisplay } from '../../ui/MapDisplay/MapDisplay'
import { LoadingIndicator } from '../../ui/LoadingIndicator/LoadingIndicator'


type MyGoogleMapProps = {
  search: string
}

const MyGoogleMap = ({ search }: MyGoogleMapProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const center = useCurrentLocation()
  const mapRef = useRef<google.maps.Map | null>(null)
  
  // カスタムフックを使用してロジックを分離
  const { convertedPins, isLoading, setApiPins } = useMapPins()
  const { suggestPins } = useMapSuggestions(search)
  const { selectedPinId, handleMarkerClick, handleSuggestClick } = useMapInteractions()

  // APIから取得したピンを状態に反映するコールバック
  const handlePinsReceived = (pins: any[]) => {
    setApiPins(pins)
  }
  const { handleIdle } = useMapIdle(handlePinsReceived)

  // 検索フィルタリング
  const filteredPins = convertedPins.filter((pin) =>
    search === '' ||
    (pin.address && pin.address.includes(search)) ||
    (pin.machine_name && pin.machine_name.includes(search))
  )

  // APIからピンが取得できない場合はダミーデータを使用
  const displayPins = filteredPins.length > 0 ? filteredPins : mapPins.filter((pin) =>
    pin.address && (search === '' || pin.address.includes(search))
  )

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
      {/* サジェストリスト */}
      <SuggestList
        suggestions={suggestPins}
        onSuggestionClick={onSuggestClick}
        isVisible={!!search && suggestPins.length > 0}
      />
      {/* 地図表示 */}
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
