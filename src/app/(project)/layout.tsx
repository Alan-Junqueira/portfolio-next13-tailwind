import { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

import { ReactNode } from 'react'

import { Footer } from '@/components/partials/Footer'
import { Header } from '@/components/partials/Header'

import '../global.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Início',
  description: 'Portfólio | Início',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} bg-gray-900 text-green-600`}>
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
