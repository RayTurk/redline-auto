import type { Metadata } from 'next'
import { Russo_One, DM_Sans } from 'next/font/google'
import './globals.css'

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'RedLine Auto Service', template: '%s | RedLine Auto Service' },
  description: "Cleveland's trusted oil change, brake service, and auto care shop. Fast service, fair prices, and real-time updates on your vehicle.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${russoOne.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  )
}
