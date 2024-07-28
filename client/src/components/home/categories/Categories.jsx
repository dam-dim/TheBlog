import { useEffect, useState } from "react";

import * as categoryService from "../../../services/categoryService";

import styles from "./Categories.module.css";
import Category from "./category/Category";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryService
            .getAll()
            .then(setCategories)
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.categories}>
            <h1>Categories</h1>

            {categories.map((category) => (
                <Category key={category._id} category={category} />
            ))}
        </div>
    );
}
