import { Navbar } from '@/components/layout/Navbar'
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FTC 19666 Forever Knight',
  description: 'Building tomorrow\'s innovators through robotics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
