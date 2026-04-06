import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dorcas Ayomide — Virtual Assistant',
  description: 'Professional Virtual Assistant helping CEOs, Founders, and HR professionals stay organized and focused on what actually moves the needle.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
