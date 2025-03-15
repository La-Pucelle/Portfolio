'use client'
import { useEffect, useRef, useState } from 'react'

export default function SpaceShooter({ isDark }) {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const keysPressed = useRef(new Set());
    const lastShot = useRef(0);
    const gameState = useRef({
        bullets: [],
        enemies: [],
        isGameOver: false
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const state = gameState.current;

        const player = {
            x: canvas.width / 2 - 15,
            y: canvas.height - 80,
            width: 30,
            height: 30,
            speed: 5,
            lives: 3
        };

        function updateBullets() {
            for(let i = state.bullets.length - 1; i >= 0; i--) {
                state.bullets[i].y -= 7;
                ctx.fillStyle = isDark ? '#93ff65' : '#ff8686';
                ctx.fillRect(
                    state.bullets[i].x, 
                    state.bullets[i].y, 
                    state.bullets[i].width, 
                    state.bullets[i].height
                );
                
                if(state.bullets[i].y < 0) state.bullets.splice(i, 1);
            }
        }

        function shoot() {
            const now = Date.now();
            if (now - lastShot.current >= 500) {
                state.bullets.push({
                    x: player.x + player.width/2 - 2,
                    y: player.y,
                    width: 4,
                    height: 10
                });
                lastShot.current = now;
            }
        }

        function updatePlayerPosition() {
            if (keysPressed.current.has('ArrowLeft') && player.x > 0) {
                player.x -= player.speed;
            }
            if (keysPressed.current.has('ArrowRight') && player.x < canvas.width - player.width) {
                player.x += player.speed;
            }
            if (keysPressed.current.has(' ')) {
                shoot();
            }
        }

        function updateEnemies() {
            if(Math.random() < 0.01 && state.enemies.length < 5) {
                state.enemies.push({
                    x: Math.random() * (canvas.width - 20),
                    y: 0,
                    width: 20,
                    height: 20,
                    speed: 2
                });
            }

            for(let i = state.enemies.length - 1; i >= 0; i--) {
                state.enemies[i].y += state.enemies[i].speed;
                ctx.fillStyle = '#ff4444';
                ctx.fillRect(
                    state.enemies[i].x, 
                    state.enemies[i].y, 
                    state.enemies[i].width, 
                    state.enemies[i].height
                );

                if(checkCollision(player, state.enemies[i])) {
                    state.enemies.splice(i, 1);
                    player.lives--;
                    if(player.lives <= 0) {
                        state.isGameOver = true;
                    }
                    continue;
                }

                for(let j = state.bullets.length - 1; j >= 0; j--) {
                    if(checkCollision(state.bullets[j], state.enemies[i])) {
                        state.enemies.splice(i, 1);
                        state.bullets.splice(j, 1);
                        setScore(s => s + 10);
                        break;
                    }
                }

                if(state.enemies[i] && state.enemies[i].y > canvas.height) {
                    state.enemies.splice(i, 1);
                }
            }
        }

        function drawPlayer() {
            ctx.fillStyle = isDark ? '#93ff65' : '#ff8686';
            ctx.beginPath();
            ctx.moveTo(player.x + player.width/2, player.y);
            ctx.lineTo(player.x, player.y + player.height);
            ctx.lineTo(player.x + player.width, player.y + player.height);
            ctx.closePath();
            ctx.fill();
        }

        function drawLives() {
            ctx.fillStyle = isDark ? '#93ff65' : '#ff8686';
            for(let i = 0; i < player.lives; i++) {
                ctx.fillRect(10 + i * 20, 10, 10, 10);
            }
        }

        function checkCollision(rect1, rect2) {
            return rect1.x < rect2.x + rect2.width &&
                   rect1.x + rect1.width > rect2.x &&
                   rect1.y < rect2.y + rect2.height &&
                   rect1.y + rect1.height > rect2.y;
        }

        function resetGame() {
            player.lives = 3;
            player.x = canvas.width / 2 - 15;
            setScore(0);
            state.enemies = [];
            state.bullets = [];
            state.isGameOver = false;
        }

        function updateGame() {
            if (!state.isGameOver) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                updatePlayerPosition();
                updateBullets();
                updateEnemies();
                drawPlayer();
                drawLives();
                requestAnimationFrame(updateGame);
            }
        }

        function handleKeyDown(e) {
            if (e.key === 'r' && state.isGameOver) {
                resetGame();
                updateGame();
            } else {
                keysPressed.current.add(e.key);
            }
        }

        function handleKeyUp(e) {
            keysPressed.current.delete(e.key);
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        updateGame();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isDark]);

    return (
        <div style={{ textAlign: 'center', width: '700px' }}>
            <div style={{ 
                color: isDark ? '#93ff65' : '#ff8686',
                marginBottom: '1.5rem',
                fontSize: '1.2rem'
            }}>
                ⋆｡°✩ Score: {score} ✩°｡⋆
            </div>
            <canvas
                ref={canvasRef}
                width={500}
                height={500}
                style={{ 
                    border: `1px solid ${isDark ? '#93ff65' : '#ff8686'}`,
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.2)'
                }}
            />
            {gameState.current.isGameOver && (
                <div style={{ 
                    marginTop: '1rem',
                    color: isDark ? '#93ff65' : '#ff8686',
                    letterSpacing: '0.2em'
                }}>
                    ⋆｡°✩ Game Over - Press R to Restart ✩°｡⋆
                </div>
            )}
            <div style={{ 
                marginTop: '1rem',
                fontSize: '0.9rem',
                opacity: 0.7,
                letterSpacing: '0.1em'
            }}>
                ← → to move • SPACE to shoot
            </div>
        </div>
    );
}