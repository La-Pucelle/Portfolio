import Image from 'next/image'
import styles from './Home.module.css'
import { Bar } from './components/Bar/Bar'
import { About } from './components/about/About'
import { Services } from './components/services/Services'

import utsutsu from '../assets/Utsutsu-lapushel-white.svg'

export default function Home() {
  return (
    <>
      <Bar />
      <div className={styles.container}>
        <div className={styles.child}>
          <div className={styles.text}>
            <p>Hi, My name is</p>
            <div className={styles.cero}>
            <span>00.</span><h1>La Pucelle</h1>
            </div>
            <p>Versatile software engineer</p>
            <p>experienced in C, Java, Python, React, Node.js.</p>
            <p>Let's create something amazing!.</p>
            <br></br>
            <a>GitHub</a>
          </div>

          <div className={styles.imgcontainer}>
            <Image src={utsutsu} className={styles.utsutsu} alt='utsutsu-miya'/>
          </div>
        </div>
      </div>

      <About />
      <Services />
    </>
  )
}
