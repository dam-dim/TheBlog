import { useEffect, useState } from "react";

import * as postService from "../../../services/postService";

import styles from "./Recent.module.css";

import RecentListItem from "./recent-list-item/RecentListItem";

export default function Recent() {
    // TODO: Fetch the latest 3 posts and display them
    // useState -> storing the posts
    // useEffect -> fetching the posts

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService
            .getLatestPosts()
            .then(setPosts)
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.recent}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.content}>
                {posts.map((post) => (
                    <RecentListItem {...post} key={post._id} />
                ))}
            </div>
        </div>
    );
}
