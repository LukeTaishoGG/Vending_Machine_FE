'use client'
import { useLogin } from '@/features/useLogin/useLogin'
import LoginPage from '@/components/LoginForm/index'

export default function LoginRoute() {
  const {
    userIdOrEmail,
    setUserIdOrEmail,
    password,
    setPassword,
    message,
    isLoading,
    handleLogin,
  } = useLogin()

  return (
    <LoginPage
      userIdOrEmail={userIdOrEmail}
      setUserIdOrEmail={setUserIdOrEmail}
      password={password}
      setPassword={setPassword}
      message={message}
      isLoading={isLoading}
      onSubmit={handleLogin}
    />
  )
}
