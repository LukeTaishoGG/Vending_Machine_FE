import type { User } from '@/types/auth'

// ピン追加時のユーザーID検証
export const validateUserId = (user: User | null): number => {
  if (!user?.id) {
    throw new Error('ユーザーIDが取得できません')
  }
  return user.id
}
