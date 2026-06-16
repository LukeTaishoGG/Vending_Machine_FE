import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Deep 自販機 Map',
  description: '自動販売機マップ',
}

export default function HomePage() {
  return <HomeContent />
}
