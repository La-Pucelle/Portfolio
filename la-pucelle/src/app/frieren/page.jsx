'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './frieren.module.css'

export default function Frieren() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isVideoPlaying && videoRef.current && audioRef.current) {
            const playMedia = async () => {
                try {
                    await Promise.all([
                        videoRef.current.play(),
                        audioRef.current.play()
                    ]);
                } catch (error) {
                    console.error('Playback failed:', error);
                }
            };
            playMedia();
        }
    }, [isVideoPlaying]);

    const handlePlay = () => {
        setIsVideoPlaying(true);
    };

    const handleClose = () => {
        if (videoRef.current && audioRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsVideoPlaying(false);
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

            {isVideoPlaying && (
                <div className={styles.videoOverlay}>
                    <button className={styles.closeButton} onClick={handleClose}>×</button>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        src="/frieren.mp4"
                        playsInline
                        muted
                        loop
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