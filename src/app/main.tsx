'use client'

import Header from '@/components/Header'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ flex: 1, minHeight: 0 }}>{children}</main>
    </>
  )
}
