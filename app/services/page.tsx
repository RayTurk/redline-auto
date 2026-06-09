import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Transparent, flat-rate pricing for oil changes, brake service, tire rotation, battery replacement, and full diagnostics. No surprises.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface border-b border-border pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-eyebrow">What We Offer</span>
          <h1 className="font-heading text-6xl text-text mt-3 mb-4">Services & Pricing</h1>
          <p className="font-body text-muted text-lg max-w-xl">
            Every price is flat rate. You know the cost before we start. No labor surprises, no shop fees.
          </p>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {services.map(service => (
            <div key={service.id} className="card">
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1">{service.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h2 className="font-heading text-3xl text-text">{service.name}</h2>
                    <div className="flex items-baseline gap-1">
                      <span className="font-body text-xs text-muted">{service.unit}</span>
                      <span className="font-heading text-2xl text-primary">${service.startingPrice}</span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted mb-4">{service.description}</p>

                  {service.subOptions && (
                    <div className="border-t border-border pt-4">
                      <p className="font-body text-xs text-muted uppercase tracking-wider mb-3">Options</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {service.subOptions.map(opt => (
                          <div key={opt.id} className="bg-bg rounded-lg p-3 border border-border">
                            <p className="font-body text-sm text-text font-medium">{opt.name}</p>
                            <p className="font-heading text-xl text-primary mt-1">${opt.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-text mb-4">Ready to Schedule?</h2>
          <p className="font-body text-muted mb-6">
            Pick your service online and choose a time. We'll handle the rest.
          </p>
          <Link href="/book" className="btn-primary">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  )
}
