import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ServicesGrid from '@/components/home/ServicesGrid'
import HowItWorks from '@/components/home/HowItWorks'
import PortalCallout from '@/components/home/PortalCallout'
import Testimonials from '@/components/home/Testimonials'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'RedLine Auto Service | Cleveland Oil Changes & Brake Service',
  description: "Cleveland Heights' trusted auto shop. Fast oil changes, brake service, and real-time vehicle status updates. Book online in minutes.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <PortalCallout />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
