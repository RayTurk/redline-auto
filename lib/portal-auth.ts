const KEY = 'redline_demo_auth'

export function setDemoAuth(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(KEY, 'true')
  }
}

export function isDemoAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(KEY) === 'true'
}

export function clearDemoAuth(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(KEY)
  }
}
