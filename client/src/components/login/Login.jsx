import styles from "./Login.module.css";

export default function Login() {
    const loginHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.login}>
            <form action="" method="POST" onSubmit={loginHandler}>
                <h1>Log in</h1>
                <div className={styles.username}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div className={styles.password}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div className={styles.submit}>
                    <input type="submit" id="submit" value="Log in" />
                </div>
            </form>
            <p>
                If You do not have an account, You can register{" "}
                <a href="/register">here.</a>
            </p>
        </div>
    );
}
