import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import parseDate from "../../../../utils/dateParser";
import * as categoryService from "../../../../services/categoryService";

import styles from "./RecentListItem.module.css";

export default function RecentListItem(props) {
    const [category, setCategory] = useState("");

    useEffect(() => {
        categoryService
            .getCategoryById(props.category)
            .then((res) => setCategory(res[0]))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.card}>
            <img src={props?.imageUrl} alt="" />
            <div className={styles.cardDetails}>
                <h3>{props.title}</h3>
                <p>{category.name}</p>

                <div className={styles.creator}>
                    <p>@{props.author?.username}</p>
                    <p>{parseDate(props._createdOn)}</p>
                </div>
                <Link to={`/posts/${props._id}/details`}>Read more</Link>
            </div>
        </div>
    );
}
