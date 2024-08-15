import { useNavigate } from "react-router-dom";
import * as postService from "../../../services/postService";
import styles from "./Fill.module.css";
import logErrors from "../../../utils/logger";

export default function Fill(props) {
    const navigate = useNavigate();

    const onClickHandler = async () => {
        try {
            alert("Are you sure?");
            await postService.fill();
            props.updateState();
        } catch (error) {
            logErrors(error);
            navigate("/error");
        }
    };

    return (
        <div className={styles.fill} onClick={onClickHandler}>
            <h1>ADD 100 DUMMY POSTS</h1>
        </div>
    );
}
