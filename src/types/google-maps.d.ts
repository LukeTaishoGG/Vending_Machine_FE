declare global {
  interface Window {
    google: typeof google
  }
}

declare namespace google.maps {
  class Geocoder {
    geocode(
      request: GeocoderRequest,
      callback?: (results: GeocoderResult[], status: GeocoderStatus) => void
    ): Promise<GeocoderResponse>
  }

  interface GeocoderRequest {
    address?: string
    location?: LatLng
    bounds?: LatLngBounds
    componentRestrictions?: GeocoderComponentRestrictions
    region?: string
  }

  interface GeocoderResponse {
    results: GeocoderResult[]
    status: GeocoderStatus
  }

  interface GeocoderResult {
    address_components: GeocoderAddressComponent[]
    formatted_address: string
    geometry: GeocoderGeometry
    place_id: string
    types: string[]
  }

  interface GeocoderAddressComponent {
    long_name: string
    short_name: string
    types: string[]
  }

  interface GeocoderGeometry {
    bounds?: LatLngBounds
    location: LatLng
    location_type: GeocoderLocationType
    viewport: LatLngBounds
  }

  enum GeocoderLocationType {
    APPROXIMATE = 'APPROXIMATE',
    GEOMETRIC_CENTER = 'GEOMETRIC_CENTER',
    RANGE_INTERPOLATED = 'RANGE_INTERPOLATED',
    ROOFTOP = 'ROOFTOP'
  }

  enum GeocoderStatus {
    ERROR = 'ERROR',
    INVALID_REQUEST = 'INVALID_REQUEST',
    OK = 'OK',
    OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
    REQUEST_DENIED = 'REQUEST_DENIED',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    ZERO_RESULTS = 'ZERO_RESULTS'
  }

  interface GeocoderComponentRestrictions {
    administrativeArea?: string
    country?: string
    locality?: string
    postalCode?: string
    route?: string
  }

  class LatLng {
    constructor(lat: number, lng: number, noWrap?: boolean)
    lat(): number
    lng(): number
  }

  class LatLngBounds {
    constructor(sw?: LatLng, ne?: LatLng)
    getCenter(): LatLng
    getNorthEast(): LatLng
    getSouthWest(): LatLng
    isEmpty(): boolean
    toSpan(): LatLng
    toString(): string
    toUrlValue(precision?: number): string
    union(other: LatLngBounds): LatLngBounds
  }

  interface MapMouseEvent {
    latLng: LatLng | null
    domEvent: MouseEvent
  }
}

export {}