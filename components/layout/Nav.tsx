'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Book Appointment' },
  { href: '/portal', label: 'Customer Portal' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-heading text-2xl text-primary tracking-tight">REDLINE</span>
          <span className="font-body text-xs text-muted font-semibold uppercase tracking-[0.15em] ml-1 mt-0.5">
            Auto Service
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-muted hover:text-text transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary text-sm py-2 px-4">
            Book Now
          </Link>
        </nav>

        <button
          className="md:hidden text-muted hover:text-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 space-y-3">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block font-body text-sm text-muted hover:text-text py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary text-sm block text-center mt-2" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
