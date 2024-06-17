import { Link } from "react-router-dom";

import styles from "./Register.module.css";

export default function Register() {
    const registerHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.register}>
            <h1>Register</h1>
            <form action="" method="POST" onSubmit={registerHandler}>
                <div className={styles.input}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div className={styles.input}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>

                <div className={styles.input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div className={styles.input}>
                    <label htmlFor="password">Repeat Password</label>
                    <input
                        type="password"
                        name="repPassword"
                        id="repPassword"
                    />
                </div>

                <div className={styles.submit}>
                    <input type="submit" id="submit" value="Register" />
                </div>
            </form>
            <p>
                If You already have have an account, You can login{" "}
                <Link to="/login">here.</Link>
            </p>
        </div>
    );
}
