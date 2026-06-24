import { Input, Button, VStack } from '@chakra-ui/react'

type LoginFormProps = {
  userIdOrEmail: string
  setUserIdOrEmail: (value: string) => void
  password: string
  setPassword: (value: string) => void
  isLoading: boolean
  onSubmit: (e: React.FormEvent) => void
}

export default function LoginForm({
  userIdOrEmail,
  setUserIdOrEmail,
  password,
  setPassword,
  isLoading,
  onSubmit,
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={4} align="stretch">
        <Input
          type="text"
          placeholder="ユーザーID または メールアドレス"
          value={userIdOrEmail}
          onChange={(e) => setUserIdOrEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
  )
}
