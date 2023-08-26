import styles from './floatingLogin.module.css'
import { AiOutlineGithub, AiOutlineGoogle, AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react'

export function FloatingLogin(){

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
          document.body.style.overflow = 'auto'
        }
    }, [])
    

    return(
        <div className={styles.all}>
            <div className={styles.container}>
                

                <form className={styles.child}>
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                        />
                        <p className={styles.forgotPassword}>Forgot Password?</p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button type="submit">Sign in</button>
                        <p className={styles.account}>Create your new account?</p>
                    </div>
                    
                    <div className={styles.signwithContainer}>
                        <p>or sign in with</p>

                        <div className={styles.iconsContainer}>
                            <AiOutlineGoogle />
                            <AiOutlineGithub />
                        </div>
                    </div>
                </form>
            </div>

            <div className={styles.design}>
                
            </div>
        </div>
    )
}