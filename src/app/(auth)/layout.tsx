import { IBM_Plex_Mono } from 'next/font/google'

import { Metadata } from 'next'
import { ReactNode } from 'react'

import '../global.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Início',
  description: 'Portfólio Alan Junqueira | Home',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} bg-gray-900 text-green-600`}>
        <div className="flex items-center justify-center min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}