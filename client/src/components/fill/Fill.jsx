import * as postService from "../../services/postService";
import styles from "./Fill.module.css";

export default function Fill() {
    const onClickHandler = async () => {
        const allPosts = await postService.getAll();

        if (allPosts === undefined) await postService.fill();
    };
    return (
        <div className={styles.fill} onClick={onClickHandler}>
            <h1>FILL THE DB WITH DUMMY POSTS</h1>
        </div>
    );
}
