import { renderHook, act } from '@testing-library/react'
import { useBooking } from '../useBooking'

describe('useBooking', () => {
  it('starts at step 1', () => {
    const { result } = renderHook(() => useBooking())
    expect(result.current.state.step).toBe(1)
  })

  it('nextStep advances from step 1 to 2', () => {
    const { result } = renderHook(() => useBooking())
    act(() => result.current.nextStep())
    expect(result.current.state.step).toBe(2)
  })

  it('nextStep advances from step 2 to 3', () => {
    const { result } = renderHook(() => useBooking())
    act(() => { result.current.nextStep(); result.current.nextStep() })
    expect(result.current.state.step).toBe(3)
  })

  it('nextStep advances from step 3 to confirmation', () => {
    const { result } = renderHook(() => useBooking())
    act(() => {
      result.current.nextStep()
      result.current.nextStep()
      result.current.nextStep()
    })
    expect(result.current.state.step).toBe('confirmation')
  })

  it('prevStep goes back from step 2 to 1', () => {
    const { result } = renderHook(() => useBooking())
    act(() => result.current.nextStep())
    act(() => result.current.prevStep())
    expect(result.current.state.step).toBe(1)
  })

  it('setService updates serviceId and subOptionId', () => {
    const { result } = renderHook(() => useBooking())
    act(() => result.current.setService('oil-change', 'full-synthetic'))
    expect(result.current.state.serviceId).toBe('oil-change')
    expect(result.current.state.subOptionId).toBe('full-synthetic')
  })

  it('setDateTime updates date and timeSlot', () => {
    const { result } = renderHook(() => useBooking())
    const d = new Date('2026-06-10')
    act(() => result.current.setDateTime(d, '10:00 AM'))
    expect(result.current.state.date).toEqual(d)
    expect(result.current.state.timeSlot).toBe('10:00 AM')
  })

  it('setInfo updates name and vehicle fields', () => {
    const { result } = renderHook(() => useBooking())
    act(() => result.current.setInfo({ name: 'Jane Doe', vehicle: '2020 Honda CR-V' }))
    expect(result.current.state.name).toBe('Jane Doe')
    expect(result.current.state.vehicle).toBe('2020 Honda CR-V')
  })
})
