'use client'
import { useRouter } from 'next/navigation'
import { setDemoAuth } from '@/lib/portal-auth'

export default function PortalPage() {
  const router = useRouter()

  function handleEnter() {
    setDemoAuth()
    router.push('/portal/dashboard')
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 pt-16">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center gap-1 mb-8">
          <span className="font-heading text-3xl text-primary">REDLINE</span>
          <span className="font-body text-sm text-muted font-semibold uppercase tracking-[0.15em] ml-1">
            Auto Service
          </span>
        </div>

        <h1 className="font-heading text-4xl text-text mb-3">Customer Portal</h1>
        <p className="font-body text-muted mb-10">
          See what your customers see. One click enters you as a demo customer with a vehicle currently in service.
        </p>

        <button onClick={handleEnter} className="btn-primary w-full py-4 text-base">
          Enter Demo Portal
        </button>

        <p className="font-body text-xs text-muted mt-4">This is a demo. No real login required.</p>
      </div>
    </div>
  )
}
