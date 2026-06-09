import type { Metadata } from 'next'
import BookingWizard from '@/components/book/BookingWizard'

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: "Schedule your oil change, brake service, or other auto care online. Pick a time and we'll handle the rest.",
}

export default function BookPage() {
  return (
    <section className="min-h-screen bg-bg pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-eyebrow">Schedule Online</span>
          <h1 className="font-heading text-5xl text-text mt-3">Book an Appointment</h1>
        </div>
        <BookingWizard />
      </div>
    </section>
  )
}
