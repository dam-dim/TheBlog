import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="#">
                <h1 className={styles.title}>The Blog</h1>
            </a>
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
