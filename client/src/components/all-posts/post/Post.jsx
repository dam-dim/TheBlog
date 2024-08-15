import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as categoryService from "../../../services/categoryService";
import parseDate from "../../../utils/dateParser";

import styles from "./Post.module.css";
import logErrors from "../../../utils/logger";

export default function Post(props) {
    const [category, SetCategory] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        categoryService
            .getCategoryById(props.category)
            .then((res) => SetCategory(res[0]))
            .catch((err) => {
                logErrors(err);
                navigate("/error");
            });
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
                    <p>
                        {props.author?.firstname} {props.author?.lastName}
                    </p>
                    <p>{parseDate(props._createdOn)}</p>
                </div>
            </Link>
        </div>
    );
}
