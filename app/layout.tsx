import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Dr . INDIRA'S SKIN & HAIR CLINIC",
  description:
    'Specialist-led clinical dermatology, advanced hair restoration, and results-driven cosmetology in KPHB Phase 1, Kukatpally, Hyderabad. MBBS, MD Dermatology. 4.9★ rated with 870+ reviews.',
  keywords: [
    'dermatologist Guntur',
    'dermatology clinic Nallacheruvu',
    'skin specialist Guntur',
    'hair transplant Guntur',
    'cosmetology clinic Guntur',
  ],
  openGraph: {
    title: "Dr.INDIRA'S SKIN & HAIR CLINIC",
    description: 'Expert dermatology care in Guntur, Andhra Pradesh. 4.9★ · 870+ reviews.',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}