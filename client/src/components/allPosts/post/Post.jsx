import { Link } from "react-router-dom";

import styles from "./Post.module.css";

export default function Post() {
    return (
        <div className={styles.post}>
            <div className={styles.over}>
                <h3>Post Title</h3>
                <h4>Post Category</h4>

                <p>Post Creator</p>
                <p>19.06.24 20:02</p>
                <Link to="/details">Details</Link>
            </div>
        </div>
    );
}
