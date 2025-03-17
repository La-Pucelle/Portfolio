'use client'
import { useRef, useState, useEffect } from 'react';
import styles from './VideoSection.module.css';

export default function VideoSection({ isDark }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const themeColor = isDark ? '#93ff65' : '#ff8686';

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setCurrentTime(formatTime(current));
            setDuration(formatTime(duration));
            setProgress((current / duration) * 100);
        }
    };

    const handleProgressClick = (e) => {
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        const newTime = (percentage / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(percentage);
    };

    return (
        <div className={styles.player}>
            <div className={styles.videoContainer}>
                <video
                    ref={videoRef}
                    src="/video.mp4"
                    className={styles.video}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleTimeUpdate}
                    loop
                />
            </div>
            
            <div className={styles.controlPanel}>
                <div className={styles.timeDisplay}>
                    <span>{currentTime}</span>
                    <span>{duration}</span>
                </div>
                
                <div 
                    className={styles.progressBarContainer}
                    onClick={handleProgressClick}
                    style={{
                        '--progress': `${progress}%`,
                        '--theme-color': themeColor
                    }}
                >
                    <div 
                        className={styles.progressBar}
                        style={{ background: themeColor }}
                    />
                </div>

                <div className={styles.mainControls}>
                    <button 
                        className={styles.playButton} 
                        onClick={togglePlay}
                        style={{ color: themeColor }}
                    >
                        {isPlaying ? '⏸' : '▶'}
                    </button>
                    <div className={styles.volumeControl}>
                        <span 
                            className={styles.volumeIcon}
                            style={{ color: themeColor }}
                        >
                            🔊
                        </span>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className={styles.volumeSlider}
                            style={{
                                '--thumb-color': themeColor,
                                '--track-color': themeColor
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}