import styles from './Services.module.css'
import { FaCode } from 'react-icons/fa'
import { BsBrush } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'
import { IoPhonePortrait } from 'react-icons/io5'
import { MdSettings } from 'react-icons/md'
import { AiOutlineApi } from 'react-icons/ai'

const items = [
    {
        icon: <FaCode className={styles.icon}/>,
        tittle: 'Web Application Development',
        desc: 'Create complete web applications with expertise in front-end and back-end development, ensuring seamless functionality and optimal user experience.'
    },{
        icon: <BsBrush className={styles.icon}/>,
        tittle: 'UI/UX Design',
        desc: 'Employ captivating design principles and intuitive user interface experiences to enhance user engagement and satisfaction.'
    },{
        icon: <RiComputerLine className={styles.icon}/>,
        tittle: 'Website Development',
        desc: 'Develop custom websites with interactive features, captivating designs, and smooth navigation for an immersive user experience.'
    },{
        icon: <IoPhonePortrait className={styles.icon}/>,
        tittle: 'Mobile App Development',
        desc: 'Build high-quality mobile applications for iOS and Android platforms, ensuring superior performance, functionality, and user satisfaction.'
    },{
        icon: <MdSettings className={styles.icon}/>,
        tittle: 'Website Maintenance and Optimization',
        desc: 'Offer ongoing maintenance, performance optimization, and security enhancements to ensure websites operate efficiently and deliver exceptional user experiences.'
    },{
        icon: <AiOutlineApi className={styles.icon}/>,
        tittle: 'API Integration and External Services',
        desc: 'Seamlessly integrate diverse APIs and external services to enhance application functionality and unlock new possibilities for user interaction and engagement.'
    } 
]

export function Services(){
    return(
        <div className={styles.container} id='servicesContainer'>
            <div className={styles.tittle}>
                <p>02.</p>
                <h3>Services.</h3>
            </div>
            <div className={styles.child}>
                {items.map(({ icon, tittle, desc}) =>(
                    <div className={styles.item}>
                        {icon}
                        <h5>
                            {tittle}
                        </h5>

                        <p>
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}