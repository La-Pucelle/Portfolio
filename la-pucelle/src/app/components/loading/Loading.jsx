import styles from './Loading.module.css'

export function Loading(){
    return(
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
    )
}