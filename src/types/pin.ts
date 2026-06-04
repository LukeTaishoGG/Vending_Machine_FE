export type MapPin = {
  id: number
  lat: number
  lng: number
  address: string
  machine_name?: string
}

export type ApiPin = {
  id: number
  latitude: string
  longitude: string
  address: string
  machine_name?: string
}

export type MapBounds = {
  ne: { lat: number; lng: number }
  sw: { lat: number; lng: number }
}
