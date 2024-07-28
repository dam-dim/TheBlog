import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import parseDate from "../../../../utils/dateParser";
import * as categoryService from "../../../../services/categoryService";

import styles from "./Post.module.css";

export default function Post(props) {
    const [category, SetCategory] = useState("");

    useEffect(() => {
        categoryService
            .getCategoryById(props.category)
            .then((res) => SetCategory(res[0]))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.post}>
            <Link to={`/posts/${props._id}/details`}>
                <div className={styles.firstCol}>
                    <h3>{props.title}</h3>
                    <br />
                    <h4>{category.name}</h4>
                </div>
                <div>
                    <p>@{props.author?.username}</p>
                    <p>{parseDate(props._createdOn)}</p>
                </div>
            </Link>
        </div>
    );
}
