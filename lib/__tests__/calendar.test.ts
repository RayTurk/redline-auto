import { getDaysInMonth, isDayAvailable, getTimeSlots } from '../calendar'

describe('getDaysInMonth', () => {
  it('returns 31 days for January', () => {
    expect(getDaysInMonth(2026, 0)).toHaveLength(31)
  })

  it('returns 28 days for February 2026', () => {
    expect(getDaysInMonth(2026, 1)).toHaveLength(28)
  })

  it('first day has correct year and month', () => {
    const days = getDaysInMonth(2026, 5)
    expect(days[0].getFullYear()).toBe(2026)
    expect(days[0].getMonth()).toBe(5)
    expect(days[0].getDate()).toBe(1)
  })
})

describe('isDayAvailable', () => {
  // Use local date constructor (not ISO strings) to avoid UTC timezone shifting
  const today = new Date(2026, 5, 8) // June 8, 2026

  it('returns false for yesterday', () => {
    expect(isDayAvailable(new Date(2026, 5, 7), today)).toBe(false)
  })

  it('returns false for today', () => {
    expect(isDayAvailable(new Date(2026, 5, 8), today)).toBe(false)
  })

  it('returns false for Sundays', () => {
    // 2026-06-14 is a Sunday
    expect(isDayAvailable(new Date(2026, 5, 14), today)).toBe(false)
  })

  it('returns true for a weekday tomorrow', () => {
    // 2026-06-09 is a Tuesday
    expect(isDayAvailable(new Date(2026, 5, 9), today)).toBe(true)
  })

  it('returns true for a weekday 7 days out', () => {
    // 2026-06-15 is a Monday
    expect(isDayAvailable(new Date(2026, 5, 15), today)).toBe(true)
  })

  it('returns false for a day more than 7 days out', () => {
    expect(isDayAvailable(new Date(2026, 5, 20), today)).toBe(false)
  })
})

describe('getTimeSlots', () => {
  it('returns 9 slots', () => {
    expect(getTimeSlots()).toHaveLength(9)
  })

  it('first slot is 8:00 AM', () => {
    expect(getTimeSlots()[0]).toBe('8:00 AM')
  })

  it('last slot is 4:00 PM', () => {
    const slots = getTimeSlots()
    expect(slots[slots.length - 1]).toBe('4:00 PM')
  })

  it('noon slot is 12:00 PM', () => {
    expect(getTimeSlots()[4]).toBe('12:00 PM')
  })
})
