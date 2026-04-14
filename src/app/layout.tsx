import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Praise Oluebube Okwuchi — Strategic Communication Specialist',
  description: 'Strategic Communication Specialist, Public Speaking Trainer, author, and development practitioner with a decade of experience across corporate communications, NGO leadership, and policy advocacy.',
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
