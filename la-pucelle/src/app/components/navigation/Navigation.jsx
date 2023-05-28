"use client";
import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'

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

export function Navigation() {
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
    <header className={styles.header}>
      <DefaultNavbar />
      {showFloating && (
        <FloatingNavbar show={showFloating}/>
      )}
    </header>
  );
}