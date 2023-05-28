import styles from './About.module.css'
import Image from 'next/image'

import utsutsu from '../../../assets/miya.gif'

export function About(){
    return(
        <div className={styles.container}>
            <div className={styles.child}>
                <div className={styles.image}>
                        <Image src={utsutsu} className={styles.utsutsu}/>
                </div>

                <div className={styles.txtcontainer}>
                    <div className={styles.tittle}>
                        <p>01.</p>
                        <h3>About me.</h3>
                    </div>

                    <div className={styles.text}>
                        <p>
                            I'm a passionate individual whose interests lie at the intersection of the digital world and music. Since my days in a youth orchestra, harmony and rhythm have always fascinated me. This fascination translated into computer science when I began my studies in Multimedia Computer Engineering. Being a self-taught learner by nature, I relish in learning new technologies and exploring how they can interact with users in innovative ways.
                        </p>
                        <p>
                            My studies and practice in graphic design have made me understand the significance of aesthetics in digital experiences, which I've applied in developing intuitive user interfaces. I'm particularly interested in creating video games with Unity, where I can blend all these skills to create immersive and engaging experiences.
                        </p>

                        <p>
                            Throughout my career, I've worked with a variety of programming languages such as 
                            <span>C</span>, 
                            <span>Java</span>, 
                            <span>Node.js</span>, 
                            <span>React</span>, 
                            <span>Python</span>, 
                            and 
                            <span>C#</span>.
                            Each has provided me with a fresh perspective on problem-solving and allowed me to build a solid technical skill set.
                        </p>
                        
                        <p>
                            In my spare time, you'll likely find me with a cup of coffee in hand, as I'm a bona fide coffee addict. I love the brewing process, the aroma, and of course, the energy and focus it provides, especially during those long coding sessions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}