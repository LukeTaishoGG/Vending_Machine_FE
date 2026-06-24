'use client'
import { useLogin } from '@/features/useLogin/useLogin'
import LoginForm from '@/components/LoginForm'

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
    <LoginForm
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
