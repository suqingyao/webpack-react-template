import type { LoginRequestForm } from '../interface'
import http from '@/utils/http'

export function login(params: LoginRequestForm) {
  return http.post('/login', params)
}

export function getMenuList() {
  return http.get<Menu.MenuOptions[]>('/menu/list')
}
