import { useEffect } from "react";

import styles from "./Comment.module.css";
import parseDate from "../../../utils/dateParser";

export default function Comment(props) {
    return (
        <div className={styles.comment}>
            {/* <div className={styles.commentImage}>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                />
            </div> */}

            <div className={styles.commentContent}>
                <p>
                    <strong>
                        {props.firstName} {props.lastName}
                    </strong>{" "}
                    on {parseDate(props.createdOn)} said:
                </p>
                <p>{props.content}</p>
            </div>
        </div>
    );
}
