import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as categoryService from "../../../../services/categoryService";

import parseDate from "../../../../utils/dateParser";
import logErrors from "../../../../utils/logger";

import styles from "./RecentListItem.module.css";

export default function RecentListItem(props) {
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        categoryService
            .getCategoryById(props.category)
            .then((res) => setCategory(res[0]))
            .catch((err) => {
                logErrors(err);
                navigate("/error");
            });
    }, []);

    return (
        <div className={styles.card}>
            <img src={props?.imageUrl} alt="" />
            <div className={styles.cardDetails}>
                <h4 className={styles.title}>{props.title}</h4>
                <p>{category.name}</p>

                <div className={styles.creator}>
                    <p>
                        {props.author?.firstName} {props.author?.lastName}
                    </p>
                    <p>{parseDate(props._createdOn)}</p>
                </div>
                <Link to={`/posts/${props._id}/details`}>Read more</Link>
            </div>
        </div>
    );
}
