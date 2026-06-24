'use client'

import MyGoogleMap from '@/components/Map/MyGoogleMap'
import { useSearch } from '@/contexts/SearchContext'

export default function HomePage() {
  const { search } = useSearch()

  return <MyGoogleMap search={search} />
}
