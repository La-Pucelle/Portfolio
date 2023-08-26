import styles from './projects.module.css'

const Parallax = [
    {
        image: '/login-bg.gif',
    },
    {
        image: '/login-bg.gif',
    }

]

export default function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.tittle}>
                <h1>Projects</h1>
            </div>

            <div className={styles.parallax}>
                {Parallax.map(({ image }, index) => (
                    <div key={index} className={styles.item} style={{backgroundImage: `url(${image})`}}>
                        <div className={styles.content}>

                        </div>
                    </div>
                ))}
            </div>

            <iframe src="https://www.la-pucelle.net" width="600" height="400"></iframe>
        </div>
    )
}