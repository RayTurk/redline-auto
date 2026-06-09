'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { clearDemoAuth } from '@/lib/portal-auth'
import { demoCustomer } from '@/data/portal'

export default function PortalTopBar() {
  const router = useRouter()
  const pathname = usePathname()

  function handleSignOut() {
    clearDemoAuth()
    router.push('/portal')
  }

  const navLinks = [
    { href: '/portal/dashboard', label: 'Dashboard' },
    { href: '/portal/history', label: 'History' },
  ]

  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div>
            <p className="font-body text-xs text-muted leading-none mb-0.5">Customer Portal</p>
            <p className="font-heading text-sm text-text">
              {demoCustomer.name}
              <span className="font-body font-normal text-muted ml-2 text-xs">{demoCustomer.vehicle}</span>
            </p>
          </div>

          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'font-body text-sm px-3 py-1.5 rounded-md transition-colors',
                  pathname === link.href
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted hover:text-text',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <nav className="flex sm:hidden items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'font-body text-xs px-2.5 py-1.5 rounded-md transition-colors',
                  pathname === link.href
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted hover:text-text',
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={handleSignOut}
            className="font-body text-xs text-muted hover:text-text transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}
