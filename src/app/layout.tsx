import { Providers } from './providers'
import Main from './main'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Providers>
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  )
}
