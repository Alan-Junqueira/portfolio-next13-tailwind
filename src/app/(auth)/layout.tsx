import { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

import { ReactNode } from 'react'

import '../global.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Login',
  description: 'Auth | Login',
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
