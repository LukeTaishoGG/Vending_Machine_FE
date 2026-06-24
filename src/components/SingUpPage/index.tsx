import { Box, VStack, Text } from '@chakra-ui/react'
import SignUpForm from '@/components/ui/SignUpForm/SignUpForm'
import { useSignUp } from '@/features/useSingUpPage/useSignUpPage'

export const SignUpPage = () => {
  const { userId, setUserId, email, setEmail, password, setPassword, message, handleSubmit } =
    useSignUp()
  return (
    <>
      <Box p={6} maxW="400px" mx="auto">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            サインアップ
          </Text>
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
        </VStack>
      </Box>
    </>
  )
}
