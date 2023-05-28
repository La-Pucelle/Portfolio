import { links } from './Navigation'
import Link from 'next/link';
import Image from 'next/image.js';
import styles from './floatingnavbar.module.css';

import utsutsu from '../../../assets/Utsutsu-lapushel.png'

export function FloatingNavbar({ show }) {
    return(
        <nav className={`${styles.navbar} ${show ? styles.show : ""}`}>
            <div className={styles.logo}>
                <Image src={utsutsu} alt="utsutsu-miya" className={styles.utsutsu}/>
            </div>

            <ul className={styles.links}>
                {links.map(({ label, route }) => (
                <li key={route} className={styles.hover}>
                    <Link href={route}>
                        {label}
                    </Link>
                </li>
                ))}
            </ul>
            
            <div className={styles.login}>Login</div>
        </nav>
    )
}