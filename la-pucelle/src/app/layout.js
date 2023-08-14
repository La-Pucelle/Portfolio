"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/navigation/Navigation'
import { DayNight } from './components/day-night/DayNight'
import { Footer } from './components/footer/Footer'
import { Loading } from './components/loading/Loading'
import { LoginRegister } from './components/navigation/login/Login';
import { useState, useEffect } from 'react'
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const[showLogin, setshowLogin] = useState(false)

  const handleClick = () => {
      setshowLogin(!showLogin)
  }

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
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {isLoading ? <Loading /> : (
          <>
            <Navigation handleClick={handleClick}/>
            {showLogin && <LoginRegister />}
            <DayNight />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
