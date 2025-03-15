'use client'
import { useState, useEffect, useRef } from 'react'
import SpaceShooter from './games/SpaceShooter'
import SnakeGame from './games/SnakeGame'
import PongGame from './games/PongGame'

export default function SpaceGame({ isDark }) {
    const [currentGame, setCurrentGame] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const height = containerRef.current.scrollHeight;
            containerRef.current.style.height = isExpanded ? `${height}px` : '200px';
        }
    }, [currentGame, isExpanded]);

    const games = [
        { id: 'space', name: 'Space Shooter', component: SpaceShooter },
        { id: 'snake', name: 'Snake', component: SnakeGame },
        { id: 'pong', name: 'Pong', component: PongGame }
    ];

    const handleGameSelect = (gameId) => {
        setIsExpanded(true);
        setTimeout(() => setCurrentGame(gameId), 300);
    };

    return (
        <div 
            ref={containerRef}
            style={{ 
                width: isExpanded ? '700px' : '500px',
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                overflow: 'hidden'
            }}
        >
            {!currentGame ? (
                <>
                    <div style={{ 
                        color: isDark ? '#93ff65' : '#ff8686',
                        textAlign: 'center',
                        marginBottom: '1rem'
                    }}>
                        ✧ ⋄ ✧ select game ✧ ⋄ ✧
                    </div>
                    <div style={{ 
                        display: 'flex',
                        gap: '3rem',
                        justifyContent: 'center'
                    }}>
                        {games.map(game => (
                            <button
                                key={game.id}
                                onClick={() => handleGameSelect(game.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: isDark ? '#93ff65' : '#ff8686',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    padding: '1rem'
                                }}
                                onMouseEnter={e => {
                                    e.target.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={e => {
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ fontSize: '0.9rem', letterSpacing: '0.2em' }}>
                                    ⋆｡°✩ {game.name} ✩°｡⋆
                                </div>
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                (() => {
                    const Game = games.find(g => g.id === currentGame)?.component;
                    return Game ? <Game isDark={isDark} onReturn={() => {
                        setCurrentGame(null);
                        setTimeout(() => setIsExpanded(false), 50);
                    }} /> : null;
                })()
            )}
        </div>
    );
}