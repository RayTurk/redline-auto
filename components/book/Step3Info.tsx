'use client'
import { useState } from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  vehicle: string
  notes: string
}

interface Props {
  onNext: (data: FormData) => void
  onBack: () => void
}

export default function Step3Info({ onNext, onBack }: Props) {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', vehicle: '', notes: '' })

  function update(field: keyof FormData, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  const canSubmit = form.name && form.phone && form.email && form.vehicle

  return (
    <div>
      <h2 className="font-heading text-3xl text-text mb-6">Your Info</h2>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-body text-xs text-muted uppercase tracking-wider block mb-1.5">Full Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={e => update('name', e.target.value)}
              placeholder="John Smith"
              className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-body text-sm text-text placeholder-muted/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-xs text-muted uppercase tracking-wider block mb-1.5">Phone Number *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => update('phone', e.target.value)}
              placeholder="(216) 555-0100"
              className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-body text-sm text-text placeholder-muted/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="font-body text-xs text-muted uppercase tracking-wider block mb-1.5">Email Address *</label>
          <input
            type="email"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="john@example.com"
            className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-body text-sm text-text placeholder-muted/50 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="font-body text-xs text-muted uppercase tracking-wider block mb-1.5">Vehicle (Year, Make, Model) *</label>
          <input
            type="text"
            value={form.vehicle}
            onChange={e => update('vehicle', e.target.value)}
            placeholder="2019 Chevy Silverado 1500"
            className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-body text-sm text-text placeholder-muted/50 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="font-body text-xs text-muted uppercase tracking-wider block mb-1.5">Notes (optional)</label>
          <textarea
            value={form.notes}
            onChange={e => update('notes', e.target.value)}
            placeholder="Anything we should know before your appointment..."
            rows={3}
            className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 font-body text-sm text-text placeholder-muted/50 focus:border-primary focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="btn-outline flex-1 py-4">Back</button>
        <button
          onClick={() => onNext(form)}
          disabled={!canSubmit}
          className="btn-primary flex-1 py-4 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  )
}
