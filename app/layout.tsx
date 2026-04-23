import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Accenture Industry and Enterprise UKI Banking | UK & Ireland',
  description: 'Candidate prospectus for Accenture Industry and Enterprise UKI Banking Practice, UK & Ireland. For experienced professionals at Manager and Senior Manager level.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_geistMono.variable} font-sans antialiased`}>
        <ClerkProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ClerkProvider>
      </body>
    </html>
  )
}
