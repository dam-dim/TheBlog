import { useEffect, useState } from "react";

import * as postService from "../../../services/postService";

import styles from "./Recent.module.css";

import Post from "../../post/Post";

export default function Recent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService
            .getLatestPosts(3)
            .then(setPosts)
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.recent}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.content}>
                {posts.map((post) => (
                    <Post {...post} key={post._id} />
                ))}
            </div>
        </div>
    );
}
