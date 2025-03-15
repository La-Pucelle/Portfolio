'use client'
import { useEffect, useRef, useState } from 'react'

export default function PongGame({ isDark }) {
    const canvasRef = useRef(null);
    const [score, setScore] = useState({ player: 0, ai: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        
        const paddle = {
            width: 10,
            height: 60,
            player: { y: canvas.height/2 - 30 },
            ai: { y: canvas.height/2 - 30 },
            speed: 5
        };

        const ball = {
            x: canvas.width/2,
            y: canvas.height/2,
            size: 8,
            dx: 2,
            dy: 2,
            baseSpeed: 2,
            maxSpeed: 8,
            speedIncrement: 0.2
        };

        function drawPaddles() {
            ctx.fillStyle = isDark ? '#93ff65' : '#ff8686';
            // Player paddle
            ctx.fillRect(0, paddle.player.y, paddle.width, paddle.height);
            // AI paddle
            ctx.fillRect(
                canvas.width - paddle.width,
                paddle.ai.y,
                paddle.width,
                paddle.height
            );
        }

        function drawBall() {
            ctx.fillStyle = isDark ? '#93ff65' : '#ff8686';
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
            ctx.fill();
        }

        function moveAI() {
            const aiCenter = paddle.ai.y + paddle.height/2;
            const targetY = ball.y;
            
            if (Math.abs(aiCenter - targetY) > 30) {
                const direction = aiCenter < targetY ? 1 : -1;
                paddle.ai.y += paddle.speed * direction * 0.6;
            }

            paddle.ai.y = Math.max(0, Math.min(canvas.height - paddle.height, paddle.ai.y));
        }

        function updateBall() {
            ball.x += ball.dx;
            ball.y += ball.dy;

            if (ball.y <= 0 || ball.y >= canvas.height) {
                ball.dy *= -1;
            }

            if (ball.dx < 0 && ball.x <= paddle.width && 
                ball.y >= paddle.player.y && 
                ball.y <= paddle.player.y + paddle.height) {
                ball.dx *= -1;
                const currentSpeed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
                if (currentSpeed < ball.maxSpeed) {
                    const factor = (currentSpeed + ball.speedIncrement) / currentSpeed;
                    ball.dx *= factor;
                    ball.dy *= factor;
                }
            }

            if (ball.dx > 0 && ball.x >= canvas.width - paddle.width && 
                ball.y >= paddle.ai.y && 
                ball.y <= paddle.ai.y + paddle.height) {
                ball.dx *= -1;
            }

            if (ball.x <= 0) {
                setScore(s => ({ ...s, ai: s.ai + 1 }));
                resetBall();
            }
            if (ball.x >= canvas.width) {
                setScore(s => ({ ...s, player: s.player + 1 }));
                resetBall();
            }
        }

        function resetBall() {
            ball.x = canvas.width/2;
            ball.y = canvas.height/2;
            ball.dx = ball.baseSpeed * (Math.random() > 0.5 ? 1 : -1);
            ball.dy = ball.baseSpeed * (Math.random() > 0.5 ? 1 : -1);
        }

        function updateGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveAI();
            updateBall();
            drawPaddles();
            drawBall();
            animationId = requestAnimationFrame(updateGame);
        }

        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            const mouseY = e.clientY - rect.top;
            paddle.player.y = Math.max(0, Math.min(canvas.height - paddle.height, mouseY));
        }

        canvas.addEventListener('mousemove', handleMouseMove);
        updateGame();

        return () => {
            cancelAnimationFrame(animationId);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDark]);

    return (
        <div style={{ textAlign: 'center', width: '700px' }}>
            <div style={{ 
                color: isDark ? '#93ff65' : '#ff8686',
                marginBottom: '1rem'
            }}>
                Player {score.player} - {score.ai} AI
            </div>
            <canvas
                ref={canvasRef}
                width={400}
                height={400}
                style={{ 
                    border: `1px solid ${isDark ? '#93ff65' : '#ff8686'}`,
                    borderRadius: '4px',
                    cursor: 'none'
                }}
            />
            <div style={{ 
                marginTop: '1rem',
                fontSize: '0.9rem',
                opacity: 0.7
            }}>
                Move mouse to control paddle
            </div>
        </div>
    );
}