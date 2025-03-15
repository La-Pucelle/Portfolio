'use client'
import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer({ isDark }) {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const audioRef = useRef(null);
    const progressRef = useRef(null);

    // Add console log to verify component mounting
    useEffect(() => {
        console.log('MusicPlayer mounted');
        async function loadPlaylist() {
            try {
                const response = await fetch('/api/playlist');
                const data = await response.json();
                console.log('Playlist data:', data);
                if (data.songs && data.songs.length > 0) {
                    setPlaylist(data.songs);
                }
            } catch (error) {
                console.error('Error loading playlist:', error);
            }
        }
        loadPlaylist();
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !playlist) return;

        const updateProgress = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        const handleEnded = () => {
            if (isRepeat) {
                audio.currentTime = 0;
                audio.play();
            } else if (isShuffle && playlist.length > 0) {
                const nextTrack = Math.floor(Math.random() * playlist.length);
                setCurrentTrack(nextTrack);
            } else if (playlist.length > 0) {
                setCurrentTrack(current => 
                    current === playlist.length - 1 ? 0 : current + 1
                );
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('loadedmetadata', () => {});
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isRepeat, isShuffle, playlist]);

    const currentSong = playlist[currentTrack];

    useEffect(() => {
        if (currentSong && audioRef.current) {
            audioRef.current.src = `/assets/playlist/${currentSong.file}.mp3`;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrack, playlist, isPlaying]);  // Updated dependencies

    const handleProgressClick = (e) => {
        const rect = progressRef.current.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audioRef.current.currentTime = pos * audioRef.current.duration;
    };

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div style={{ 
            padding: '1.5rem',
            background: isDark ? 'rgba(147, 255, 101, 0.05)' : 'rgba(255, 134, 134, 0.05)',
            borderRadius: '12px',
            width: '100%',
            fontSize: '0.9rem'
        }}>
            <h2 style={{ 
                color: isDark ? '#93ff65' : '#ff8686',
                margin: '0 0 1rem 0',
                fontSize: '1rem'
            }}>
                ⋆｡°✩ Playlist ✩°｡⋆
            </h2>

            <div style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                marginBottom: '1.5rem'
            }}>
                {currentSong && (
                    <div style={{ 
                        width: '150px',
                        height: '150px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: isDark ? 'rgba(147, 255, 101, 0.1)' : 'rgba(255, 134, 134, 0.1)',
                        flexShrink: 0
                    }}>
                        <img 
                            src={`/assets/playlist/${currentSong.file}.png`}
                            alt={currentSong.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}

                <div style={{ 
                    flex: '1',
                    maxHeight: '150px',
                    overflowY: 'auto',
                }}>
                    {playlist.map((song, index) => (
                        <div
                            key={song.file}
                            onClick={() => setCurrentTrack(index)}
                            style={{
                                padding: '0.5rem',
                                color: isDark ? '#93ff65' : '#ff8686',
                                cursor: 'pointer',
                                background: currentTrack === index 
                                    ? (isDark ? 'rgba(147, 255, 101, 0.1)' : 'rgba(255, 134, 134, 0.1)')
                                    : 'transparent',
                                borderRadius: '4px',
                                marginBottom: '0.5rem',
                                fontSize: '0.9rem'
                            }}
                        >
                            {song.title}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ width: '100%' }}>
                <div 
                    ref={progressRef}
                    onClick={handleProgressClick}
                    style={{ 
                        width: '100%',
                        height: '4px',
                        background: isDark ? 'rgba(147, 255, 101, 0.1)' : 'rgba(255, 134, 134, 0.1)',
                        cursor: 'pointer',
                        position: 'relative',
                        marginBottom: '0.5rem'
                    }}
                >
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: isDark ? '#93ff65' : '#ff8686',
                        transition: 'width 0.1s linear'
                    }}/>
                </div>

                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    color: isDark ? '#93ff65' : '#ff8686',
                    fontSize: '0.8rem',
                    marginBottom: '1rem'
                }}>
                    <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                    <span>{formatTime(duration)}</span>
                </div>

                <div style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    fontSize: '0.9rem'
                }}>
                    <button
                        onClick={() => setIsShuffle(!isShuffle)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: isDark ? (isShuffle ? '#93ff65' : 'rgba(147, 255, 101, 0.5)') 
                                        : (isShuffle ? '#ff8686' : 'rgba(255, 134, 134, 0.5)'),
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        ⤨
                    </button>
                    <button
                        onClick={() => setCurrentTrack(current => 
                            current === 0 ? playlist.length - 1 : current - 1
                        )}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: isDark ? '#93ff65' : '#ff8686',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        ⋘
                    </button>
                    <button
                        onClick={handlePlayPause}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: isDark ? '#93ff65' : '#ff8686',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        {isPlaying ? '⫾⫾' : '▷'}
                    </button>
                    <button
                        onClick={() => setCurrentTrack(current => 
                            (current + 1) % playlist.length
                        )}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: isDark ? '#93ff65' : '#ff8686',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        ⋙
                    </button>
                    <button
                        onClick={() => setIsRepeat(!isRepeat)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: isDark ? (isRepeat ? '#93ff65' : 'rgba(147, 255, 101, 0.5)') 
                                        : (isRepeat ? '#ff8686' : 'rgba(255, 134, 134, 0.5)'),
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        ⟲
                    </button>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={`/assets/playlist/${currentSong?.file}.mp3`}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
        </div>
    );
}