import UserMenu from '../ui/UserMenu/UserMenu'
import { useHeaderUser } from '../../hooks/useHeaderUser'

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