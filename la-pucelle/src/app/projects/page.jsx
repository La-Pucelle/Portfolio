'use client'
import styles from './projects.module.css'
import { useState, Suspense } from 'react'

const Parallax = [
    {
        name: "La Pucelle's page",
        image: '/login-bg.gif',
        iframe: 'https://www.la-pucelle.net',
        desc: 'My portfolio page',
        date: ''
    },
    {
        name: "Entrerrieles page",
        image: '/login-bg.gif',
        iframe: 'https://www.entrerrieles.com/menu',
        desc: 'Webpay page with intranet',
        date: ''
    }
]

export default function Projects(){
    const [activeIframe, setActiveIframe] = useState(null)

    const activateIframe = (index) => {
        setActiveIframe(index);
    }

    const deactivateIframe = () => {
        setActiveIframe(null);
    }

    return(
        <div className={styles.container}>
            <div className={styles.tittle}>
                <h1>Projects</h1>
            </div>

            <div className={styles.parallax}>
                {Parallax.map(({ image, name, iframe, desc }, index) => (
                    <div key={index} className={styles.item} style={{backgroundImage: `url(${image})`}}>
                        {activeIframe === index ? (
                            <iframe src={iframe} onBlur={deactivateIframe}></iframe>
                        ) : (
                            <div className={styles.content}>
                                <h1>{name}</h1>
                                <p>{desc}</p>
                                <button onClick={() => activateIframe(index)}>Activate</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}