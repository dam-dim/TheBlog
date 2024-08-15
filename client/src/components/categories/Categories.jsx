import { useEffect, useState } from "react";

import * as categoryService from "../../services/categoryService";

import styles from "./Categories.module.css";
import Category from "./category/Category";
import logErrors from "../../utils/logger";
import { useNavigate } from "react-router-dom";

/**
 *
 * @param {*} props {componentTitle}
 * @returns
 */
export default function Categories(props) {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        categoryService
            .getAllByNameAsc()
            .then((result) => {
                setCategories(result);
            })
            .catch((err) => {
                logErrors(err);
                navigate("/error");
            });
    }, []);

    return (
        <div className={styles.categories}>
            <h1>{props.componentTitle}</h1>

            <div className={styles.categoriesWrapper}>
                {categories.map((category) => (
                    <div key={category._id} className={styles.col}>
                        <Category category={category} />
                    </div>
                ))}
            </div>
        </div>
    );
}
