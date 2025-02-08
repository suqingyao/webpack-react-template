import type { RouteObject } from './interface'
import SignIn from '@/pages/auth/sign-in'
import { Navigate, useRoutes } from 'react-router'

export const routerArray: RouteObject[] = []
const metaRouters = require.context('./modules', true, /\.tsx$/)

metaRouters.keys().forEach((key: any) => {
  const module = metaRouters(key)
  Object.keys(module).forEach((routeKey) => {
    routerArray.push(...module[routeKey])
  })
})

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/signIn" />,
  },
  {
    path: '/signIn',
    element: <SignIn />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
]

function Router() {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
