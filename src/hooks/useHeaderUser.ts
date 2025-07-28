import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Contexts/UserContext'

export const useHeaderUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  useEffect(() => {
    setIsLoggedIn(!!user)
  }, [user])

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    navigate('/')
  }

  const handleSignup = () => {
    navigate('/signup')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return {
    isLoggedIn,
    handleLogout,
    handleSignup,
    handleLogin
  }
}