import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import SingUpPage from '../pages/SingUpPage';
import UserPage from '../pages/UserPage';
import AddPinPage from '../pages/AddPinPage';
import MyGoogleMap from '../components/container/map/MyGoogleMap';

type AppRouterProps = {
  search: string;
};

const AppRouter = ({ search }: AppRouterProps) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SingUpPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/add-pin" element={<AddPinPage />} />
      <Route path="/" element={<MyGoogleMap search={search} />} />
    </Routes>
  );
};

export default AppRouter;
