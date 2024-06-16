import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <a href="#">
                    <h1>The Blog</h1>
                </a>
            </div>

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
        </div>
    );
}
