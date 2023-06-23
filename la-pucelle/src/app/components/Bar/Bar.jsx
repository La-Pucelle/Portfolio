"use client";
import styles from './Bar.module.css'
import { createRef, useEffect } from 'react'

const items = [
    {
        position: '00. ',   
        label: 'La Pucelle',
        container: 'navbarContainer'
    },
    {
        position: '01. ',   
        label: 'About me',
        container: 'aboutContainer'
    },
    {
        position: '02. ',   
        label: 'Services',
        container: 'servicesContainer'
    }
]

export function Bar (){
    const refs = items.reduce((acc,value) => {
        acc[value.container] = createRef()
        return acc
    }, {})

    const handleClick = containerId => {
        const ref = refs[containerId]
        if (ref.current){
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        items.forEach(item => {
            refs[item.container].current = document.getElementById(item.container)
        })
    }, [])

    return(
        <div className={styles.container}>
            <ul className={styles.child}>
                {items.map(({position, label, container}, index) => (
                    <li className={styles.item} key={index}>
                        <p className={styles.text} onClick={() => handleClick(container)}>
                            <span className={styles.position}>{position}</span>{label}
                        </p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    )
}