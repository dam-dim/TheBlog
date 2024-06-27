import { Link } from "react-router-dom";

import styles from "./Post.module.css";
import parseDate from "../../../../utils/dateParser";

export default function Post(props) {
    return (
        <div className={styles.post}>
            <Link to={`/posts/${props._id}/details`}>
                <div className={styles.firstCol}>
                    <h3>{props.title}</h3>
                    <br />

                    <h4>{props.category}</h4>
                </div>
                <div>
                    <p>@{props.author?.username}</p>
                    <p>{parseDate(props._createdOn)}</p>
                </div>
            </Link>
        </div>
    );
}
