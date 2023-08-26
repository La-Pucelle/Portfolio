import styles from './Footer.module.css'
import Link from 'next/link'
import { SlSocialGithub, SlSocialInstagram } from 'react-icons/sl'
import { TiSocialYoutube } from 'react-icons/ti'
import { SiKofi } from 'react-icons/si'

export function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.icons}>
                <div className={styles.grid}>
                    <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SlSocialGithub className={styles.icon}/></Link>
                    <Link href={'https://www.instagram.com/lapucelle.exe'} target="_blank" rel="noopener noreferrer"><SlSocialInstagram className={styles.icon}/></Link>
                    <Link href={'https://www.youtube.com/watch?v=m2OvX3t1ZEY'} target="_blank" rel="noopener noreferrer"><SiKofi className={styles.icon}/></Link>
                    <Link href={'https://www.youtube.com/channel/UCHD0hasejEdvFD3HYSWpoGg'} target="_blank" rel="noopener noreferrer"><TiSocialYoutube className={styles.icon}/></Link>
                </div>

                <div className={styles.copyright}>
                    <p>Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}