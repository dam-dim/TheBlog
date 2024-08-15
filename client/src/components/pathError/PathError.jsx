import styles from "./PathError.module.css";

export default function PathError() {
    return (
        <div className={styles.error}>
            <h1>Sorry, page not found! :{"("}</h1>
        </div>
    );
}
