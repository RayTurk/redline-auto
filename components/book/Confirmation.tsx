import Link from 'next/link'
import { services } from '@/data/services'
import type { BookingState } from '@/lib/useBooking'

interface Props {
  state: BookingState
}

export default function Confirmation({ state }: Props) {
  const service = services.find(s => s.id === state.serviceId)
  const subOption = service?.subOptions?.find(o => o.id === state.subOptionId)
  const serviceName = subOption ? `${service?.name} -- ${subOption.name}` : service?.name

  const dateStr = state.date
    ? state.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    : ''

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 mb-6">
        <span className="text-success text-4xl">✓</span>
      </div>

      <h2 className="font-heading text-4xl text-text mb-2">You're Booked</h2>
      <p className="font-body text-muted mb-8">
        We'll text you a reminder the morning of your appointment.
      </p>

      <div className="card text-left max-w-md mx-auto mb-8 space-y-4">
        <div>
          <p className="font-body text-xs text-muted uppercase tracking-wider">Service</p>
          <p className="font-body text-sm text-text font-medium mt-0.5">{serviceName}</p>
        </div>
        <div className="w-full h-px bg-border" />
        <div>
          <p className="font-body text-xs text-muted uppercase tracking-wider">Date & Time</p>
          <p className="font-body text-sm text-text font-medium mt-0.5">{dateStr} at {state.timeSlot}</p>
        </div>
        <div className="w-full h-px bg-border" />
        <div>
          <p className="font-body text-xs text-muted uppercase tracking-wider">Vehicle</p>
          <p className="font-body text-sm text-text font-medium mt-0.5">{state.vehicle}</p>
        </div>
        <div className="w-full h-px bg-border" />
        <div>
          <p className="font-body text-xs text-muted uppercase tracking-wider">Name</p>
          <p className="font-body text-sm text-text font-medium mt-0.5">{state.name}</p>
        </div>
      </div>

      <Link href="/" className="btn-outline">
        Back to Home
      </Link>
    </div>
  )
}
