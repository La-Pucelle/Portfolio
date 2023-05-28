import Image  from "next/image"
import styles from './lalo.module.css'

import eduardo from '../../assets/lalo.png'

export default function lalo(){
    return(
        <div className={styles.container}>
            <Image src={eduardo} alt="lalo"/>
        </div>
    )
}