'use client'

import MyGoogleMap from '@/components/Map/MyGoogleMap'
import { useSearch } from '@/Contexts/SearchContext'

export default function HomeContent() {
  const { search } = useSearch()
  return <MyGoogleMap search={search} />
}
