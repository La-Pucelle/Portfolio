"use client";
import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'
import { metadata } from '../../metadata'
import { DefaultNavbar } from './defaultnavbar'
import { FloatingNavbar } from './floatingnavbar'

export const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Projects',
    route: '/projects'
  },
  {
    label: 'Contact',
    route: '/contact'
  }
]

export function Navigation({ handleClick }) {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (typeof window !== 'undefined' && window.scrollY > 90) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <head>
        <title>{metadata.title}</title>
      </head>
      <header className={styles.header}>
        <DefaultNavbar handleClick={handleClick}/>
        {showFloating && (
          <FloatingNavbar show={showFloating} handleClick={handleClick}/>
        )}
      </header>
    </>
  )
}