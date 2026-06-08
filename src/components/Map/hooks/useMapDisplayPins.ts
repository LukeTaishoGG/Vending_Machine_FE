import { useMemo } from 'react'
import type { MapPin } from '@/types/pin'
import { MOCK_MAP_PINS } from '@/data/mockLocation'

export const useMapDisplayPins = (search: string, convertedPins: MapPin[]) => {
  return useMemo(() => {
    const filteredPins = convertedPins.filter(
      (pin) =>
        search === '' ||
        (pin.address && pin.address.includes(search)) ||
        (pin.machine_name && pin.machine_name.includes(search))
    )

    if (filteredPins.length > 0) {
      return filteredPins
    }

    return MOCK_MAP_PINS.filter(
      (pin) => pin.address && (search === '' || pin.address.includes(search))
    )
  }, [search, convertedPins])
}
