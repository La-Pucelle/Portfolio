"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/navigation/Navigation'
import { DayNight } from './components/day-night/DayNight'
import { Footer } from './components/footer/Footer'
import { Loading } from './components/loading/Loading'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Esto se ejecuta después del primer renderizado
    setIsLoading(false);
  }, []);
  return (
    <html lang="en">
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
