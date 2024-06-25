import styles from "./MyError.module.css";

export default function MyError({ messages }) {
    return (
        <div className={styles.myErrors}>
            {messages &&
                messages.map((message) => {
                    return (
                        <div className={styles.myError} key={message}>
                            <h4>{message}</h4>
                        </div>
                    );
                })}
        </div>
    );
}
