'use client'
import { useBooking } from '@/lib/useBooking'
import StepIndicator from './StepIndicator'
import Step1Service from './Step1Service'
import Step2DateTime from './Step2DateTime'
import Step3Info from './Step3Info'
import Confirmation from './Confirmation'

export default function BookingWizard() {
  const { state, setService, setDateTime, setInfo, nextStep, prevStep } = useBooking()

  function handleStep1Next(serviceId: string, subOptionId: string | null) {
    setService(serviceId, subOptionId)
    nextStep()
  }

  function handleStep2Next(date: Date, timeSlot: string) {
    setDateTime(date, timeSlot)
    nextStep()
  }

  function handleStep3Next(info: { name: string; phone: string; email: string; vehicle: string; notes: string }) {
    setInfo(info)
    nextStep()
  }

  return (
    <div className="max-w-2xl mx-auto">
      {state.step !== 'confirmation' && <StepIndicator currentStep={state.step} />}
      {state.step === 1 && <Step1Service onNext={handleStep1Next} />}
      {state.step === 2 && <Step2DateTime onNext={handleStep2Next} onBack={prevStep} />}
      {state.step === 3 && <Step3Info onNext={handleStep3Next} onBack={prevStep} />}
      {state.step === 'confirmation' && <Confirmation state={state} />}
    </div>
  )
}
