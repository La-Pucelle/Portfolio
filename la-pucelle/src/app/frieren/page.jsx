'use client'
import { useState, useRef } from 'react'
import styles from './frieren.module.css'

export default function Frieren() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    const handlePlay = () => {
        setIsLoading(true);
        setIsVideoPlaying(true);
    };

    const handleVideoLoad = () => {
        setIsLoading(false);
        if (videoRef.current && audioRef.current) {
            videoRef.current.play();
            audioRef.current.play();
        }
    };

    const handleClose = () => {
        if (videoRef.current && audioRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsVideoPlaying(false);
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>フリーレン</h1>
                <p className={styles.quote}>"Time flows differently for humans and mages..."</p>
                <p className={styles.subQuote}>- Frieren</p>
                <button className={styles.watchButton} onClick={handlePlay}>
                    Journey's End
                </button>
            </div>

            {(isVideoPlaying || isLoading) && (
                <div className={styles.videoOverlay}>
                    <button className={styles.closeButton} onClick={handleClose}>×</button>
                    {isLoading && (
                        <div className={styles.loader}>Loading...</div>
                    )}
                    <video
                        ref={videoRef}
                        className={`${styles.video} ${isLoading ? styles.hidden : ''}`}
                        src="/frieren.mp4"
                        playsInline
                        muted
                        loop
                        onLoadedData={handleVideoLoad}
                    />
                    <audio
                        ref={audioRef}
                        src="/frieren.mp3"
                        loop
                    />
                </div>
            )}
        </div>
    )
}