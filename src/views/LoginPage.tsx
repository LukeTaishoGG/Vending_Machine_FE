'use client'

import { useLogin } from '@/hooks/useLogin/useLogin'
import LoginForm from '@/components/ui/LoginForm'

const LoginPage = () => {
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

export default LoginPage
