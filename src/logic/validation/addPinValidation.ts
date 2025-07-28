// ピン追加時のユーザーID検証
export const validateUserId = (user: any): number => {
  if (!user?.id) {
    throw new Error('ユーザーIDが取得できません')
  }
  return parseInt(user.id)
}