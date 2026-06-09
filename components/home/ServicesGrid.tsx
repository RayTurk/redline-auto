import Link from 'next/link'
import { services } from '@/data/services'
import ServiceIcon from '@/components/ui/ServiceIcon'

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="font-heading text-5xl text-text mt-3">Services & Pricing</h2>
          <p className="font-body text-muted mt-4 max-w-xl">
            No mystery pricing. You know what it costs before we touch your car.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service.id} className="card hover:border-primary/40 transition-colors">
              <div className="text-primary mb-4">
                <ServiceIcon serviceId={service.id} className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl text-text mb-2">{service.name}</h3>
              <p className="font-body text-sm text-muted mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-baseline gap-1">
                <span className="font-body text-xs text-muted">{service.unit}</span>
                <span className="font-heading text-2xl text-primary">${service.startingPrice}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="btn-outline">
            View Full Service Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
