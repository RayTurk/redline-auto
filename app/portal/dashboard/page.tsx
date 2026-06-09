'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isDemoAuthenticated } from '@/lib/portal-auth'
import PortalTopBar from '@/components/portal/PortalTopBar'
import StatusTracker from '@/components/portal/StatusTracker'
import UpdateLog from '@/components/portal/UpdateLog'
import ServiceSummary from '@/components/portal/ServiceSummary'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isDemoAuthenticated()) {
      router.replace('/portal')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-bg">
      <PortalTopBar />

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Status tracker */}
        <div>
          <h2 className="font-heading text-2xl text-text mb-6">Vehicle Status</h2>
          <div className="card">
            <StatusTracker />
          </div>
        </div>

        {/* Update log + service summary */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <UpdateLog />
          </div>
          <div className="lg:col-span-3">
            <ServiceSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
