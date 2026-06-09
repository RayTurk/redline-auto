import { useState } from 'react'

export interface BookingState {
  step: 1 | 2 | 3 | 'confirmation'
  serviceId: string | null
  subOptionId: string | null
  date: Date | null
  timeSlot: string | null
  name: string
  phone: string
  email: string
  vehicle: string
  notes: string
}

const initialState: BookingState = {
  step: 1,
  serviceId: null,
  subOptionId: null,
  date: null,
  timeSlot: null,
  name: '',
  phone: '',
  email: '',
  vehicle: '',
  notes: '',
}

export function useBooking() {
  const [state, setState] = useState<BookingState>(initialState)

  function setService(serviceId: string, subOptionId: string | null = null) {
    setState(s => ({ ...s, serviceId, subOptionId }))
  }

  function setDateTime(date: Date, timeSlot: string) {
    setState(s => ({ ...s, date, timeSlot }))
  }

  function setInfo(info: Partial<Pick<BookingState, 'name' | 'phone' | 'email' | 'vehicle' | 'notes'>>) {
    setState(s => ({ ...s, ...info }))
  }

  function nextStep() {
    setState(s => ({
      ...s,
      step: s.step === 1 ? 2 : s.step === 2 ? 3 : 'confirmation',
    }))
  }

  function prevStep() {
    setState(s => ({
      ...s,
      step: s.step === 2 ? 1 : s.step === 3 ? 2 : s.step,
    }))
  }

  return { state, setService, setDateTime, setInfo, nextStep, prevStep }
}
