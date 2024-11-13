// src/app/layout.tsx
import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { QuizProvider } from '../context/QuizContext'
import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import { Background } from '@/components/Background'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '1942 Studio | AI-Powered Boutique Creative Studio',
  description: 'Transform your digital presence with AI-powered websites, chatbots, social media, and content solutions. Expert web development and AI integration services.',
  keywords: 'AI solutions, web development, digital transformation, chatbots, content creation, AI integration',
  openGraph: {
    title: '1942 Studio | AI-Powered Boutique Creative Studio',
    description: 'Transform your digital presence with AI-powered solutions',
    url: 'https://1942studio.com', // Replace with your actual domain
    siteName: '1942 Studio',
    images: [
      {
        url: '/logo.png', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: '1942 Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1942 Studio | AI-Powered Boutique Creative Studio',
    description: 'Transform your digital presence with AI-powered solutions',
    images: ['/twitter-image.png'], // Add your Twitter card image
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' }, // Primary favicon
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: ['/shortcut-icon.png'],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <QuizProvider>
          <ClientLayout>
            <Navbar />
            <Background>
              {children}
              <Footer />
            </Background>
          </ClientLayout>
        </QuizProvider>
      </body>
    </html>
  )
}