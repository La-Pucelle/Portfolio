import styles from './About.module.css'

const item = [
    {
        tittle: 'hola',
        description: 'Throughout my academic journey, I have been immersed in the world of software development, gaining a solid foundation in programming principles and techniques. From learning essential programming languages to exploring data structures and algorithms, I have been honing my skills to become a proficient software engineer.'
    }
]

export function About(){
    return(
        <div className={styles.container}>
            <div className={styles.child}>
                {item.map(({ tittle, description }) => (
                    <div className={styles.item}>
                        <h1>{tittle}</h1>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}