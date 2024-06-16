import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <Link to="/">
                    <h1>The Blog</h1>
                </Link>
            </div>

            <div className={styles.navigation}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
