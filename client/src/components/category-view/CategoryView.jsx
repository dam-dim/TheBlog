import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import * as categoryService from "../../services/categoryService";

import styles from "./CategoryView.module.css";
import CategoryViewPost from "./category-view-post/CategoryViewPost";
import RecentListItem from "../home/recent-list/recent-list-item/RecentListItem";

export default function CategoryView() {
    const { categoryId } = useParams();
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState({});

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

        fn().catch((err) => console.log(err));
    }, [categoryId]);

    return (
        <div className={styles.category}>
            <h1>{category.name}</h1>
            <div className={styles.categoryWrapper}>
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
