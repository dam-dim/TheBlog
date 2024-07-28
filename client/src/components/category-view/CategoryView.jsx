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
        <div>
            <h1>{category.name}</h1>
            {posts.length > 0 ? (
                posts.map((post) => {
                    return <RecentListItem {...post} key={post._id} />;
                    // TODO: ...
                    // <CategoryViewPost post={post} />
                })
            ) : (
                <h2>No posts in this category yet!</h2>
            )}
        </div>
    );
}
