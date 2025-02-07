import { RouteObject } from 'react-router';
import AuthLayout from '@/layouts/auth-layout';
import About from '@/pages/about';
import Home from '@/pages/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];

export default routes;
