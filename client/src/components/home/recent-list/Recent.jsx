import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as postService from "../../../services/postService";

import logErrors from "../../../utils/logger";

import styles from "./Recent.module.css";

import RecentListItem from "./recent-list-item/RecentListItem";

export default function Recent() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        postService
            .getLatestPosts(4)
            .then(setPosts)
            .catch((err) => {
                logErrors(err);
                navigate("/error");
            });
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
