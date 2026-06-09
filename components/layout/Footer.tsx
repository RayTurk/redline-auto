import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Book Appointment' },
  { href: '/portal', label: 'Customer Portal' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="font-heading text-xl text-primary">REDLINE</span>
              <span className="font-body text-xs text-muted font-semibold uppercase tracking-[0.15em] ml-1">
                Auto Service
              </span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed">
              Cleveland's trusted oil change and brake shop. Fast service, fair prices, no surprises.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm text-text mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-muted hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm text-text mb-3">Contact</h3>
            <div className="space-y-2 font-body text-sm text-muted">
              <p>4400 Mayfield Rd</p>
              <p>Cleveland Heights, OH 44121</p>
              <p className="text-primary font-semibold">(216) 555-0192</p>
              <p>Mon–Sat: 8am–5pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-muted">
            © {new Date().getFullYear()} RedLine Auto Service. Demo site built by{' '}
            <a href="https://codetheland.com" className="text-primary hover:underline">
              Code The Land
            </a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
