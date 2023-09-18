import styles from './Header.module.css'
import logo from '../assets/logo.svg'
export function Header() {
    return (
        <header className={styles.headerMain}>
            <img className={styles.headerLogo} src={logo as unknown as string} alt="Logo toDoList" />
        </header>
    )
}