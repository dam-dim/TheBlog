import styles from "./Home.module.css";

export default function () {
    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <div className={styles.recent}>
                <div className={styles.post}></div>
            </div>
        </div>
    );
}
