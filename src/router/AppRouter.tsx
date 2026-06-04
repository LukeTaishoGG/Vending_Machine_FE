import { Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import UserPage from '../pages/UserPage'
import AddPinPage from '../pages/AddPinPage'
import EditPinPage from '../pages/EditPinPage'
import MyGoogleMap from '../components/Map/MyGoogleMap'

type AppRouterProps = {
  search: string
}

const AppRouter = ({ search }: AppRouterProps) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/add-pin" element={<AddPinPage />} />
      <Route path="/edit-pin/:pinId" element={<EditPinPage />} />
      <Route path="/" element={<MyGoogleMap search={search} />} />
    </Routes>
  )
}

export default AppRouter
