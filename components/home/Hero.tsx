import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg pt-16">
      {/* Diagonal red stripe -- signature visual element */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full bg-primary opacity-[0.06]"
        style={{ transform: 'skewX(-12deg) translateX(20%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-primary opacity-[0.04]"
        style={{ transform: 'skewX(-12deg) translateX(40%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="section-eyebrow">Cleveland Heights, OH</span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl text-text mb-6 leading-none">
            Cleveland's{' '}
            <span className="text-primary">Trusted</span>{' '}
            Oil & Brake Shop
          </h1>

          <p className="font-body text-lg text-muted leading-relaxed mb-10 max-w-xl">
            Fast service, fair prices, and real-time updates on your vehicle. No surprises. No runaround. Just honest work from people who know their stuff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="btn-primary text-base py-4 px-8 text-center">
              Book an Appointment
            </Link>
            <Link href="/services" className="btn-outline text-base py-4 px-8 text-center">
              See Our Services
            </Link>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-10 border-t border-border">
            <div>
              <p className="font-heading text-3xl text-text">2,400+</p>
              <p className="font-body text-xs text-muted uppercase tracking-wider mt-1">Happy customers</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-heading text-3xl text-text">15 min</p>
              <p className="font-body text-xs text-muted uppercase tracking-wider mt-1">Avg oil change</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-heading text-3xl text-text">Since '09</p>
              <p className="font-body text-xs text-muted uppercase tracking-wider mt-1">Serving Cleveland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
