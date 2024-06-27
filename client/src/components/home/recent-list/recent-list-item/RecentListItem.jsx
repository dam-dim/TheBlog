import { Link } from "react-router-dom";
import styles from "./RecentListItem.module.css";
import parseDate from "../../../../utils/dateParser";

export default function RecentListItem(props) {
    return (
        <div className={styles.card}>
            <img src={props?.imageUrl} alt="" />
            <div className={styles.cardDetails}>
                <h3>{props.title}</h3>
                <p>{props.category}</p>

                <div className={styles.creator}>
                    <p>@{props.author?.username}</p>
                    <p>{parseDate(props._createdOn)}</p>
                </div>
                <Link to={`/posts/${props._id}/details`}>Read more</Link>
            </div>
        </div>
    );
}
