import { LoginSuccess } from './types'

export function authHeader() {
  const auth = authFromStorage()

  return auth.token ? `Bearer ${auth.token}` : null
}

export function recordAuthentication(auth: LoginSuccess) {
  localStorage.setItem('auth', JSON.stringify(auth))
}

export function isLoggedIn() {
  return getUserId() !== undefined
}

export function getUserId() {
  const auth = authFromStorage()

  return auth.user && auth.user.id
}

export function getUser() {
  const auth = authFromStorage()

  return auth.user
}

export function logout() {
  localStorage.removeItem('auth')
}

function authFromStorage(): LoginSuccess {
  const auth = localStorage.getItem('auth')

  return auth ? JSON.parse(auth) : {}
}
