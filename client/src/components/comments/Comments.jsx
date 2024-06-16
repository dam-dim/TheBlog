import styles from "./Comments.module.css";
import Comment from "./comment/Comment";

export default function Comments() {
    return (
        <div className={styles.comments}>
            <h2>Comments</h2>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
}
