import * as postService from "../../../services/postService";
import styles from "./Fill.module.css";

export default function Fill(props) {
    const onClickHandler = async () => {
        try {
            alert("Are you sure?");
            await postService.fill();
            props.updateState();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.fill} onClick={onClickHandler}>
            <h1>ADD 100 DUMMY POSTS</h1>
        </div>
    );
}
