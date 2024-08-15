import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import * as categoryService from "../../services/categoryService";

import styles from "./CategoryView.module.css";
import CategoryViewPost from "./category-view-post/CategoryViewPost";
import RecentListItem from "../home/recent-list/recent-list-item/RecentListItem";
import Categories from "../categories/Categories";
import logErrors from "../../utils/logger";

export default function CategoryView() {
    const { categoryId } = useParams();
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fn = async () => {
            const categoryById = await categoryService.getCategoryById(
                categoryId
            );
            const postsByCategory = await postService.getPostsByCategoryId(
                categoryId
            );

            setCategory(categoryById[0]);
            setPosts(postsByCategory);
        };

        fn().catch((err) => {
            logErrors(err);
            navigate("/error");
        });
    }, [categoryId]);

    return (
        <div className={styles.categoryView}>
            <Categories componentTitle={"Browse through other categories"} />
            <h1 className={styles.title}>{category.name}</h1>
            <div className={styles.categoryViewWrapper}>
                {posts.length > 0 ? (
                    posts.map((post) => {
                        return <CategoryViewPost {...post} key={post._id} />;
                    })
                ) : (
                    <h2>No posts in this category yet!</h2>
                )}
            </div>
        </div>
    );
}
