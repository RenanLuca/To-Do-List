import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.headerMain}>
            <img className={styles.headerLogo} src="../assets/logo.svg" alt="Logo toDoList" />
        </header>
    )
}