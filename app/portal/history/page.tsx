'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isDemoAuthenticated } from '@/lib/portal-auth'
import PortalTopBar from '@/components/portal/PortalTopBar'
import HistoryTable from '@/components/portal/HistoryTable'

export default function HistoryPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isDemoAuthenticated()) {
      router.replace('/portal')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-bg">
      <PortalTopBar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="font-heading text-2xl text-text mb-6">Service History</h2>
        <HistoryTable />
      </div>
    </div>
  )
}
