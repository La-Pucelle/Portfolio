'use client'
import Image from "next/image"
import styles from './lalo.module.css'
import { useState, useRef, useEffect } from 'react'
import eduardo from '../../assets/lalo.png'

export default function Lalo() {
    const [showImage, setShowImage] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        if (audioRef.current) {
            audioRef.current.load();
        }
        return () => {
            document.body.style.overflow = 'unset';
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const handleClick = async () => {
        if (audioRef.current) {
            audioRef.current.loop = true;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                await playPromise;
            }
        }
        setShowImage(true);
    }

    return (
        <div className={styles.container}>
            {!showImage ? (
                <button onClick={handleClick} className={styles.trustButton}>
                    Trust me
                </button>
            ) : (
                <div className={styles.flashingImage}>
                    <Image src={eduardo} alt="lalo"/>
                </div>
            )}
            <audio ref={audioRef} style={{ display: 'none' }} preload="auto" loop>
                <source src="/audio.mp3" type="audio/mp3" />
            </audio>
        </div>
    )
}