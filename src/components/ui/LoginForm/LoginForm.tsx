import { Input, Button, VStack, Text, Box } from '@chakra-ui/react'

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
  onSubmit
}: LoginFormProps) => {
  return (
    <Box p={6} maxW="400px" mx="auto">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          ログイン
        </Text>
        <form onSubmit={onSubmit}>
          <VStack spacing={4} align="stretch">
            <Input
              type="text"
              placeholder="ユーザーID または メールアドレス"
              value={userIdOrEmail}
              onChange={e => setUserIdOrEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="ログイン中..."
              width="100%"
            >
              ログイン
            </Button>
          </VStack>
        </form>
        {message && (
          <Text
            color={message.includes('成功') ? 'green.500' : 'red.500'}
            textAlign="center"
          >
            {message}
          </Text>
        )}
      </VStack>
    </Box>
  )
}
export default LoginForm