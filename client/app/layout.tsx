import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SoulBuddy - AI-Powered Spiritual Guidance',
  description: 'Discover your path with personalized spiritual insights powered by advanced AI technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dynamic-gradient min-h-screen`}>

        {children}
      </body>
    </html>
  )
}

