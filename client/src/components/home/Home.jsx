import styles from "./Home.module.css";

export default function () {
    return (
        <div className={styles.home}>
            <div>Recent posts</div>
            <div className={styles.recent}>
                <div className={styles.post}></div>
            </div>
        </div>
    );
}
