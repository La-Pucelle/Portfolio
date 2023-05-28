import styles from './Footer.module.css'

import { SlSocialGithub, SlSocialInstagram, SlSocialSpotify } from 'react-icons/sl'
import { TiSocialYoutube } from 'react-icons/ti'

export function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.icons}>
                <div className={styles.grid}>
                    <SlSocialInstagram className={styles.icon}/>
                    <SlSocialGithub className={styles.icon}/>
                    <SlSocialSpotify className={styles.icon}/>
                    <TiSocialYoutube className={styles.icon}/>
                </div>

                <div className={styles.copyright}>
                    <p>Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}