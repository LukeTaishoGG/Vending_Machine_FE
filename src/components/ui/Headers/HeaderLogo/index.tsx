'use client'

import { useRouter } from 'next/navigation'
import './index.style.css'

export const HeaderLogo = () => {
  const router = useRouter()

  return (
    <>
      <div className="header-logo-box">
        <h1 className="header-logo" onClick={() => router.push('/')}>
          Deep 自販機 Map
        </h1>
      </div>
    </>
  )
}
