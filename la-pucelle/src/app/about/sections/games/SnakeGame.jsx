'use client'
import { useEffect, useRef, useState } from 'react'

export default function SnakeGame({ isDark }) {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const gridSize = 20;
        const tileCount = canvas.width / gridSize;
        
        let snake = [
            { x: 10, y: 10 },
        ];
        let food = { x: 15, y: 15 };
        let dx = 0;
        let dy = 0;
        let animationId;

        function drawSnake() {
            ctx.fillStyle = isDark ? '#93ff65' : '#ff8686';
            snake.forEach(segment => {
                ctx.fillRect(
                    segment.x * gridSize,
                    segment.y * gridSize,
                    gridSize - 2,
                    gridSize - 2
                );
            });
        }

        function drawFood() {
            ctx.fillStyle = '#ff4444';
            ctx.fillRect(
                food.x * gridSize,
                food.y * gridSize,
                gridSize - 2,
                gridSize - 2
            );
        }

        function moveSnake() {
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };
            
            // Wall collision
            if (head.x < 0) head.x = tileCount - 1;
            if (head.x >= tileCount) head.x = 0;
            if (head.y < 0) head.y = tileCount - 1;
            if (head.y >= tileCount) head.y = 0;
            
            snake.unshift(head);

            // Food collision
            if (head.x === food.x && head.y === food.y) {
                setScore(s => s + 10);
                food = {
                    x: Math.floor(Math.random() * tileCount),
                    y: Math.floor(Math.random() * tileCount)
                };
            } else {
                snake.pop();
            }

            // Self collision
            for (let i = 1; i < snake.length; i++) {
                if (head.x === snake[i].x && head.y === snake[i].y) {
                    resetGame();
                }
            }
        }

        function resetGame() {
            snake = [{ x: 10, y: 10 }];
            dx = 0;
            dy = 0;
            setScore(0);
        }

        function updateGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveSnake();
            drawSnake();
            drawFood();
            animationId = setTimeout(() => {
                requestAnimationFrame(updateGame);
            }, 100);
        }

        function handleKeyDown(e) {
            switch(e.key) {
                case 'ArrowUp':
                    if (dy === 0) { dx = 0; dy = -1; }
                    break;
                case 'ArrowDown':
                    if (dy === 0) { dx = 0; dy = 1; }
                    break;
                case 'ArrowLeft':
                    if (dx === 0) { dx = -1; dy = 0; }
                    break;
                case 'ArrowRight':
                    if (dx === 0) { dx = 1; dy = 0; }
                    break;
            }
        }

        updateGame();
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            clearTimeout(animationId);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isDark]);

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ 
                color: isDark ? '#93ff65' : '#ff8686',
                marginBottom: '1rem'
            }}>
                Score: {score}
            </div>
            <canvas
                ref={canvasRef}
                width={400}
                height={400}
                style={{ 
                    border: `1px solid ${isDark ? '#93ff65' : '#ff8686'}`,
                    borderRadius: '4px'
                }}
            />
            <div style={{ 
                marginTop: '1rem',
                fontSize: '0.9rem',
                opacity: 0.7
            }}>
                Use arrow keys to move
            </div>
        </div>
    );
}