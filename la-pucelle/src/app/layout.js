"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { metadata } from './metadata.js'
import { Navigation } from './components/navigation/Navigation'
import { DayNight } from './components/day-night/DayNight'
import { Footer } from './components/footer/Footer'
import { Loading } from './components/loading/Loading'
import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('visitedBefore')) {
      setIsLoading(false)
    } else {
      sessionStorage.setItem('visitedBefore', 'true')
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <body className={inter.className}>
        {isLoading ? <Loading /> : (
          <>
            <Navigation />
            <DayNight />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
