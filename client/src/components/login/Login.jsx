import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const loginHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.login}>
            <h1>Log in</h1>
            <form action="" method="POST" onSubmit={loginHandler}>
                <div className={styles.input}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div className={styles.input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div className={styles.error}>
                    <p>Wrong username or password!</p>
                </div>

                <div className={styles.submit}>
                    <input type="submit" id="submit" value="Log in" />
                </div>
            </form>
            <p>
                If You do not have an account, You can register{" "}
                <Link to="/register">here.</Link>
            </p>
        </div>
    );
}
