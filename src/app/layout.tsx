import { AppShell } from '@/components/layout/AppShell'
import { Providers } from './providers'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deep 自販機 Map',
  description: '自動販売機マップ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  )
}
