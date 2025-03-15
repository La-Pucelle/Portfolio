import styles from './frieren.module.css'

export const metadata = {
    title: 'Frieren',
    description: 'Beyond Journey\'s End',
}

export default function FrierenLayout({ children }) {
    return (
        <div className={styles.frierenLayout}>
            {children}
        </div>
    )
}