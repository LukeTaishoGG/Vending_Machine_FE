'use client'

import { useSignUp } from '@/features/useSingUpPage/useSignUpPage'
import SignUpForm from '@/components/ui/SignUpForm/SignUpForm'

export default function SignUpRoute() {
  const { userId, setUserId, email, setEmail, password, setPassword, message, handleSubmit } =
    useSignUp()

  return (
    <SignUpForm
      userId={userId}
      setUserId={setUserId}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      message={message}
      onSubmit={handleSubmit}
    />
  )
}
