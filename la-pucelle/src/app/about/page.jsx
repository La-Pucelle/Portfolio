'use client'
import styles from './about.module.css'
import { useState, useEffect } from 'react'

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={`${styles.container} ${!isDark ? styles.light : ''}`}>
            <div className={styles.noise}></div>
            <div className={styles.grid}></div>
            <button onClick={toggleTheme} className={styles.themeToggle}>
                <i className={`ri-${isDark ? 'sun' : 'moon'}-line`}></i>
            </button>
            <div className={`${styles.card} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>la pucelle</h1>
                    <div className={styles.divider}>- - - - - - - - - - - - - - -</div>
                    <div className={styles.links}>
                        <a href="/about" className={styles.iconLink}>
                            <i className="ri-information-line"></i>
                        </a>
                        <a href="/projects" className={styles.iconLink}>
                            <i className="ri-folder-line"></i>
                        </a>
                        <a href="/games" className={styles.iconLink}>
                            <i className="ri-gamepad-line"></i>
                        </a>
                        <a href="/music" className={styles.iconLink}>
                            <i className="ri-music-2-line"></i>
                        </a>
                    </div>
                    <div className={styles.divider}>- - - - - - - - - - - - - - -</div>
                </div>
            </div>
        </div>
    )
}