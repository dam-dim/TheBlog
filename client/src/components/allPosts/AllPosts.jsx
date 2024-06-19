import styles from "./AllPosts.module.css";
import Post from "./post/Post";

export default function AllPosts() {
    return (
        <div className={styles.allPosts}>
            <h1>All Posts</h1>
            <Post />
        </div>
    );
}
