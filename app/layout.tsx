import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard UI',
  description: 'A responsive dashboard built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-light">
        {children}
      </body>
    </html>
  )
} 