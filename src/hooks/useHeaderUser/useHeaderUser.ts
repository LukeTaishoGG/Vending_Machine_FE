import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/Contexts/UserContext'

export const useHeaderUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const { user, setUser } = useUser()

  useEffect(() => {
    setIsLoggedIn(!!user)
  }, [user])

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    router.push('/')
  }

  const handleSignup = () => {
    router.push('/signup')
  }

  const handleLogin = () => {
    router.push('/login')
  }

  return {
    isLoggedIn,
    handleLogout,
    handleSignup,
    handleLogin
  }
}