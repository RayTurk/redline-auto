import Link from 'next/link'

const mockUpdates = [
  { time: '10:14 AM', note: 'Vehicle checked in by Mike R.' },
  { time: '11:05 AM', note: 'Oil drain started.' },
  { time: '11:38 AM', note: 'Brake inspection underway.' },
]

export default function PortalCallout() {
  return (
    <section className="py-24 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow">Customer Portal</span>
            <h2 className="font-heading text-5xl text-text mt-3 mb-4">
              Track Your Car in Real Time
            </h2>
            <p className="font-body text-muted leading-relaxed mb-6">
              No more calling to check on your car. Log into the RedLine customer portal and see exactly where your vehicle is in the service pipeline -- live updates from your technician included.
            </p>
            <Link href="/portal" className="btn-primary">
              Try the Demo Portal
            </Link>
          </div>

          <div className="card border-primary/20 bg-bg">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">JM</span>
              </div>
              <div>
                <p className="font-body text-xs text-text font-semibold">John Metzger</p>
                <p className="font-body text-xs text-muted">2019 Chevy Silverado 1500</p>
              </div>
              <span className="ml-auto bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded-full font-body">
                In Service
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {mockUpdates.map((u, i) => (
                <div key={i} className="flex gap-3">
                  <span className="font-body text-xs text-muted w-16 shrink-0">{u.time}</span>
                  <span className="font-body text-xs text-text">{u.note}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="font-body text-xs text-success">Live updates active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
