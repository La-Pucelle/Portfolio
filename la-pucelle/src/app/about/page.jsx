'use client'
import styles from './about.module.css'
import { useState, useEffect } from 'react'
import { FaUser, FaYoutube, FaGamepad, FaMusic } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import AboutMe from './sections/AboutMe'
import VideoSection from './sections/VideoSection'
import SpaceGame from './sections/SpaceGame'
import MusicPlayer from './sections/MusicPlayer'
import utsutsuLogo from '../../assets/utsutsu.png'
import Image from 'next/image'

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [currentSection, setCurrentSection] = useState('menu');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const renderSection = () => {
        switch(currentSection) {
            case 'about':
                return <AboutMe isDark={isDark} />;
            case 'video':
                return <VideoSection isDark={isDark} />;
            case 'game':
                return <SpaceGame isDark={isDark} />;
            case 'music':
                return <MusicPlayer isDark={isDark} />;
            default:
                return (
                    <div className={styles.menuContent}>
                        <h2 className={styles.title}>lapushel</h2>
                        <div className={styles.divider}>- - - - - - - - - - - - - - -</div>
                        <div className={styles.menuItems}>
                            <button onClick={() => setCurrentSection('about')} className={styles.menuButton}>
                                <FaUser />
                            </button>
                            <button onClick={() => setCurrentSection('video')} className={styles.menuButton}>
                                <FaYoutube />
                            </button>
                            <button onClick={() => setCurrentSection('game')} className={styles.menuButton}>
                                <FaGamepad />
                            </button>
                            <button onClick={() => setCurrentSection('music')} className={styles.menuButton}>
                                <FaMusic />
                            </button>
                        </div>
                        <div className={styles.divider}>- - - - - - - - - - - - - - -</div>
                    </div>
                );
        }
    };

    return (
        <div className={`${styles.container} ${!isDark ? styles.light : ''}`}>
            <div className={styles.noise}></div>
            <div className={styles.grid}></div>
            <button onClick={() => setIsDark(!isDark)} className={styles.themeToggle}>
                {isDark ? <BsSunFill /> : <BsMoonFill />}
            </button>
            <div className={`${styles.card} ${isVisible ? styles.visible : ''}`}>
                {currentSection !== 'menu' && (
                    <button onClick={() => setCurrentSection('menu')} className={styles.backButton}>
                        <IoMdArrowBack />
                    </button>
                )}
                {renderSection()}
            </div>
        </div>
    )
}