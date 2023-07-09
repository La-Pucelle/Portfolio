import Link from 'next/link'
import { SiAbletonlive, SiCplusplus, SiCsharp, SiCss3, SiHtml5, SiJavascript, SiPython, SiNodedotjs, SiReact, SiNextdotjs, SiAdobepremierepro, SiAdobephotoshop, SiAdobeaftereffects, SiAdobeaudition, SiAdobecreativecloud, SiAdobeillustrator, SiAdobexd } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import styles from './Skills.module.css'

export function Skills(){
    return(
        <div className={styles.container}>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiCplusplus className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiCsharp className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><DiJava className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiPython className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiCss3 className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiHtml5 className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiJavascript className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiNodedotjs className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiReact className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiNextdotjs className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAbletonlive className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAdobecreativecloud className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAdobeillustrator className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAdobeaudition className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAdobepremierepro className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAdobeaftereffects className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAdobexd className={styles.icon}/></Link>
            <Link href={'https://github.com/La-Pucelle'} target="_blank" rel="noopener noreferrer"><SiAdobephotoshop className={styles.icon}/></Link>
        </div>
    )
}