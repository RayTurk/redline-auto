'use client'
import { useState } from 'react'
import { getDaysInMonth, isDayAvailable, getTimeSlots } from '@/lib/calendar'

interface Props {
  onNext: (date: Date, timeSlot: string) => void
  onBack: () => void
}

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function Step2DateTime({ onNext, onBack }: Props) {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const year = today.getFullYear()
  const month = today.getMonth()
  const days = getDaysInMonth(year, month)
  const firstDayOfWeek = new Date(year, month, 1).getDay()
  const slots = getTimeSlots()
  const morningSlots = slots.filter(s => s.includes('AM'))
  const afternoonSlots = slots.filter(s => s.includes('PM'))

  function isSameDay(a: Date, b: Date) {
    return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()
  }

  function formatDate(d: Date) {
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  }

  return (
    <div>
      <h2 className="font-heading text-3xl text-text mb-6">Pick a Date & Time</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <div className="card">
          <p className="font-heading text-lg text-text mb-4">
            {new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()}
          </p>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS_OF_WEEK.map(d => (
              <div key={d} className="text-center font-body text-xs text-muted py-1">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`e-${i}`} />
            ))}
            {days.map(day => {
              const available = isDayAvailable(day, today)
              const selected = selectedDate ? isSameDay(day, selectedDate) : false
              return (
                <button
                  key={day.getDate()}
                  disabled={!available}
                  onClick={() => { setSelectedDate(day); setSelectedSlot(null) }}
                  className={`h-9 w-full rounded-lg text-sm font-body transition-colors
                    ${selected ? 'bg-primary text-white font-semibold' : ''}
                    ${available && !selected ? 'hover:bg-primary/20 text-text' : ''}
                    ${!available ? 'text-muted/30 cursor-not-allowed' : ''}
                  `}
                >
                  {day.getDate()}
                </button>
              )
            })}
          </div>
          <p className="font-body text-xs text-muted mt-3">Available next 7 weekdays. Closed Sundays.</p>
        </div>

        {/* Time slots */}
        <div className={`card transition-opacity ${selectedDate ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
          {selectedDate ? (
            <>
              <p className="font-heading text-lg text-text mb-4">
                {formatDate(selectedDate).toUpperCase()}
              </p>
              <div className="mb-3">
                <p className="font-body text-xs text-muted uppercase tracking-wider mb-2">Morning</p>
                <div className="grid grid-cols-2 gap-2">
                  {morningSlots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 rounded-lg text-sm font-body border transition-colors
                        ${selectedSlot === slot
                          ? 'bg-primary border-primary text-white font-semibold'
                          : 'border-border text-muted hover:border-primary/40 hover:text-text'
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body text-xs text-muted uppercase tracking-wider mb-2">Afternoon</p>
                <div className="grid grid-cols-2 gap-2">
                  {afternoonSlots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 rounded-lg text-sm font-body border transition-colors
                        ${selectedSlot === slot
                          ? 'bg-primary border-primary text-white font-semibold'
                          : 'border-border text-muted hover:border-primary/40 hover:text-text'
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="font-body text-sm text-muted">Select a date to see available times.</p>
          )}
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button onClick={onBack} className="btn-outline flex-1 py-4">Back</button>
        <button
          onClick={() => onNext(selectedDate!, selectedSlot!)}
          disabled={!selectedDate || !selectedSlot}
          className="btn-primary flex-1 py-4 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue to Your Info
        </button>
      </div>
    </div>
  )
}
