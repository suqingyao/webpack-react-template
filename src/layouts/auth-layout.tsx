import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <h1>authorized</h1>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
