import UserMenu from '@/components/ui/Headers/UserMenu'
import { useHeaderUser } from '@/features/useHeaderUser/useHeaderUser'

const HeaderUser = () => {
  const { isLoggedIn, handleLogout, handleSignup, handleLogin } = useHeaderUser()

  return (
    <UserMenu
      isLoggedIn={isLoggedIn}
      onLogout={handleLogout}
      onSignup={handleSignup}
      onLogin={handleLogin}
    />
  )
}

export default HeaderUser
