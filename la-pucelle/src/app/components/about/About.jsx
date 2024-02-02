"use client";
import styles from './About.module.css'
import { useState } from 'react'
import { Aboutme } from './aboutme/Aboutme'
import { Study } from './study/Study'
import { Skills } from './skills/Skills'

const items = [
    {
        label: 'About'
    },
    {
        label: 'Study'
    },
    {
        label: 'Skills'
    }
]

const components = [Aboutme, Study, Skills]

export function About(){
    const [activeComponent, setActiveComponent] = useState(0)
    const handleItemClick = (index) => {
        setActiveComponent(index)
    }

    const renderActiveComponent = () => {

        if (activeComponent !== null) {
          const Component = components[activeComponent]
          return <Component />
        }
        return null
    }
    return(
        <div className={styles.container} id='aboutContainer'>
            <div className={styles.child}>
                <div className={styles.header}>
                    <h3 className={styles.font}><span>01. </span> About me.</h3>
                    <h1>La Pucelle</h1>
                    <p>Versatile software engineer</p>
                    <p>experienced in C, Java, Python, React, Node.js.</p>
                    <p>Let's create something amazing!.</p>
                    <ul>
                        {items.map(({ label }, index) => (
                            <li
                            key={label}
                            onClick={() => handleItemClick(index)}
                            className={activeComponent === index ? styles.activeItem : ''}
                            >
                                <div className={styles.itemContainer}>
                                    <hr className={activeComponent === index ? styles.activeItem : ''}/>
                                    <h4 className={activeComponent === index ? styles.activeItem : ''}>{label}</h4>    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.content}>
                    {renderActiveComponent()}
                </div>
            </div>
        </div>
    )
}
