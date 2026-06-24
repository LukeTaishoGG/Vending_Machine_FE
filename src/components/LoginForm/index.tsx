import { VStack, Text, Box } from '@chakra-ui/react'
import UiLoginForm from '@/components/ui/LoginForm/LoginForm'

type LoginFormProps = {
  userIdOrEmail: string
  setUserIdOrEmail: (value: string) => void
  password: string
  setPassword: (value: string) => void
  message: string
  isLoading: boolean
  onSubmit: (e: React.FormEvent) => void
}

const LoginForm = ({
  userIdOrEmail,
  setUserIdOrEmail,
  password,
  setPassword,
  message,
  isLoading,
  onSubmit,
}: LoginFormProps) => {
  return (
    <Box p={6} maxW="400px" mx="auto">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          ログイン
        </Text>
        <UiLoginForm
          userIdOrEmail={userIdOrEmail}
          setUserIdOrEmail={setUserIdOrEmail}
          password={password}
          setPassword={setPassword}
          isLoading={isLoading}
          onSubmit={onSubmit}
        />
        {message && (
          <Text color={message.includes('成功') ? 'green.500' : 'red.500'} textAlign="center">
            {message}
          </Text>
        )}
      </VStack>
    </Box>
  )
}

export default LoginForm
