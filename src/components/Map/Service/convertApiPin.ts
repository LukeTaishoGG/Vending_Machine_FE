import type { ApiPin, MapPin } from '@/types/pin'

export const convertApiPinToMapPin = (pin: ApiPin): MapPin => ({
  id: pin.id,
  lat: parseFloat(pin.latitude),
  lng: parseFloat(pin.longitude),
  address: pin.address,
  machine_name: pin.machine_name,
})

export const convertApiPinsToMapPins = (pins: ApiPin[]): MapPin[] =>
  pins.map(convertApiPinToMapPin)
