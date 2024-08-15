import styles from "./MyError.module.css";

export default function MyError() {
    return (
        <div className={styles.myError}>
            <h1>An error occured!</h1>
            <h2>We are doing our best to fix the problem!</h2>
            <h2>Feel free to use the rest of the website!</h2>
        </div>
    );
}
