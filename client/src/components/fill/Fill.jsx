import * as postService from "../../services/postService";
import styles from "./Fill.module.css";

export default function Fill() {
    const onClickHandler = async () => {
        try {
            await postService.fill();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.fill} onClick={onClickHandler}>
            <h1>FILL THE DB WITH DUMMY POSTS</h1>
        </div>
    );
}
