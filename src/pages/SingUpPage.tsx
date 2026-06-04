import { useSignUp } from '../hooks/useSingUpPage'
import SignUpForm from '../components/ui/SignUpForm/SignUpForm'

const SingUpPage = () => {
  const {
    userId,
    setUserId,
    email,
    setEmail,
    password,
    setPassword,
    message,
    handleSubmit
  } = useSignUp()

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
export default SingUpPage