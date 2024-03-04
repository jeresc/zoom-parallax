import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Zoom Parallax',
  description:
    'This is a landing page with zoom parallax effect powered by Next.js and Framer Motion',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className + ' bg-white dark:bg-[#0f0f0f]'}>
        {children}
      </body>
    </html>
  )
}
