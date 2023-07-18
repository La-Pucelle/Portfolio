import { useState } from 'react'
import { FloatingLogin } from '../floatingLogin/floatingLogin'
import styles from './Login.module.css'

export function Login({ handleClick }){
    return(
        <>
            <div className={styles.container} onClick={handleClick}>
                Login
            </div>
        </>
    )
}

export function LoginRegister(){
    return(
        <div className={styles.floating}>
            <FloatingLogin />
        </div>
    )
}