import { useState, useEffect, useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import Link from 'next/link'
import Image from 'next/image.js'
import styles from './defaultnavbar.module.css'

import utsutsu from '../../../assets/Utsutsu-lapushel.svg'
import { links } from './Navigation.jsx'

export function DefaultNavbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [showDiv, setShowDiv] = useState(false)
  const generatedDivRef = useRef(null)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setShowMenu(windowWidth <= 768)
    setShowDiv(windowWidth > 768)
  }, [windowWidth])
  const handleButtonClick = () => {
    setShowDiv(prevState => !prevState)
  };

  useEffect(() => {
    const handleScroll = () => {
      if (setShowDiv && window.scrollY >= 4) {
        setShowDiv(false)
      }
    };
  
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (generatedDivRef.current && !generatedDivRef.current.contains(event.target)) {
        setShowDiv(false)
      }
    };
  
    document.addEventListener('mousedown', handleOutsideClick)
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    };
  }, []);

  
  
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar} id='navbarContainer'>
          <div className={styles.logo}>
            <Image src={utsutsu} alt="utsutsu-miya" className={styles.utsutsu}/>
          </div>

          {showMenu ? (
            <button className={styles.menuButton} onClick={handleButtonClick}>
              {showDiv ? <CgClose /> : <AiOutlineMenu />}
            </button>
          ) : (
            <>
              <ul className={styles.links}>
                {links.map(({ label, route }) => (
                  <li key={route} className={styles.hover}>
                    <Link href={route}>{label}</Link>
                  </li>
                ))}
              </ul>

              <div className={styles.login}>Login</div>
            </>
          )}
        </nav>
        {showMenu && (
          <>
            {showDiv && (
              <div className={styles.generatedDiv}>
                <ul className={styles.generatedChild} ref={generatedDivRef}>
                  {links.map(({ label, route }) => (
                    <li key={route}>
                      <Link href={route} className={styles.hover}>{label}</Link>
                    </li>
                  ))}
                  <div className={styles.login}>Login</div>
                </ul>
              </div>
            )}
          </>
        )}
      </div>      
    </>
  );
} 
