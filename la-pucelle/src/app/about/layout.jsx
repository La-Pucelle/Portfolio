'use client'
import { useEffect } from 'react'

export default function AboutLayout({ children }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <main style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            background: '#000',
            overflow: 'hidden'
        }}>
            {children}
        </main>
    )
}