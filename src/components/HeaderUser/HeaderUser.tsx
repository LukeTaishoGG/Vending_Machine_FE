import UserMenu from '@/components/ui/UserMenu/UserMenu'
import { useHeaderUser } from '@/hooks/useHeaderUser/useHeaderUser'

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