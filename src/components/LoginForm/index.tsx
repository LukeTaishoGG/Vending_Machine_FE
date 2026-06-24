import { VStack, Text, Box } from '@chakra-ui/react'
import LoginForm from '@/components/ui/LoginForm'

type LoginPageProps = {
  userIdOrEmail: string
  setUserIdOrEmail: (value: string) => void
  password: string
  setPassword: (value: string) => void
  message: string
  isLoading: boolean
  onSubmit: (e: React.FormEvent) => void
}

export default function LoginPage({
  userIdOrEmail,
  setUserIdOrEmail,
  password,
  setPassword,
  message,
  isLoading,
  onSubmit,
}: LoginPageProps) {
  return (
    <Box p={6} maxW="400px" mx="auto">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          ログイン
        </Text>
        <LoginForm
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
