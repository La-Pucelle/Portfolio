export default function AboutMe({ isDark }) {
    return (
        <div className="about-section" style={{ 
            padding: '2rem',
            textAlign: 'center',
            width: '700px'
        }}>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ 
                    color: isDark ? '#93ff65' : '#ff8686',
                    letterSpacing: '0.5em',
                    marginBottom: '1rem'
                }}>
                    lapushel
                </h2>
                <div style={{ color: isDark ? '#93ff65' : '#ff8686' }}>
                    ✧ ⋄ ✧ ⋄ ✧ ⋄ ✧ ⋄ ✧
                </div>
            </div>

            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                margin: '2rem 0',
                color: isDark ? '#93ff65' : '#ff8686'
            }}>
                <div>⋆｡°✩ 22 ✩°｡⋆</div>
                <div>⋆｡°✩ ISTP ✩°｡⋆</div>
                <div>⋆｡°✩ CL ✩°｡⋆</div>
            </div>

            <div style={{ 
                margin: '2rem 0',
                padding: '1rem',
                background: isDark ? 'rgba(147, 255, 101, 0.1)' : 'rgba(255, 134, 134, 0.1)',
                borderRadius: '8px'
            }}>
                <p style={{ lineHeight: '1.6' }}>
                    ⋆ musician ⋆
                </p>
            </div>

            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                margin: '2rem 0'
            }}>
                {['instagram', 'youtube', 'twitch', 'discord'].map(platform => (
                    <a 
                        key={platform}
                        href={`https://${platform}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                            color: isDark ? '#93ff65' : '#ff8686',
                            fontSize: '1.5rem',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
                        onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                    >
                        <i className={`ri-${platform}-line`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
}