import { setDemoAuth, isDemoAuthenticated, clearDemoAuth } from '../portal-auth'

describe('portal-auth', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns false when nothing is set', () => {
    expect(isDemoAuthenticated()).toBe(false)
  })

  it('returns true after setDemoAuth', () => {
    setDemoAuth()
    expect(isDemoAuthenticated()).toBe(true)
  })

  it('returns false after clearDemoAuth', () => {
    setDemoAuth()
    clearDemoAuth()
    expect(isDemoAuthenticated()).toBe(false)
  })
})
