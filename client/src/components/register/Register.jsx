import { Link } from "react-router-dom";

import styles from "./Register.module.css";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [validUsername, setValidUsername] = useState(false);

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const usernameValidate = () => {
        if (username.length <= 2) setValidUsername(true);
    };

    return (
        <div className={styles.register}>
            <h1>Register</h1>
            <form action="" method="POST">
                <div className={styles.input}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={usernameChangeHandler}
                        onBlur={usernameValidate}
                        value={username}
                    />
                    {validUsername && (
                        <p>Username must be at least 3 characters!</p>
                    )}
                </div>

                <div className={styles.input}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                    <p>Wrong email format!</p>
                </div>

                <div className={styles.input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <p>Password must be at least 8 characters!</p>
                    <p>Password must contain at least one special character!</p>
                    <p>Password must contain at least one number!</p>
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
