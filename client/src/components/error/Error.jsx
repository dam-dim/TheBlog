import styles from "./Error.module.css";

export default function Error() {
    return (
        <div className={styles.error}>
            <h1>An error occured!</h1>
        </div>
    );
}
