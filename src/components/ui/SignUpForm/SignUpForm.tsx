import { Input, Button, VStack, Text } from '@chakra-ui/react'

type SignUpFormProps = {
  userId: string
  setUserId: (value: string) => void
  email: string
  setEmail: (value: string) => void
  password: string
  setPassword: (value: string) => void
  message: string
  onSubmit: (e: React.FormEvent) => void
}

const SignUpForm = ({
  userId,
  setUserId,
  email,
  setEmail,
  password,
  setPassword,
  message,
  onSubmit,
}: SignUpFormProps) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <VStack spacing={4} align="stretch">
          <Input
            type="text"
            placeholder="ユーザーID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" colorScheme="blue">
            登録
          </Button>
        </VStack>
      </form>
      {message && (
        <Text color={message.includes('成功') ? 'green.500' : 'red.500'} textAlign="center">
          {message}
        </Text>
      )}
    </>
  )
}
export default SignUpForm
