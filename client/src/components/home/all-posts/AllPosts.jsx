import { useEffect, useState } from "react";

import styles from "./AllPosts.module.css";
import * as postService from "../../../services/postService";

import Filters from "./filters/Filters";
import Post from "./post/Post";
import Pagination from "../../pagination/Pagination";

export default function AllPosts() {
    const postsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [allPostsCount, setAllPostsCount] = useState(0);
    const [posts, setPosts] = useState([]);

    const lastIndex = currentPage * postsPerPage;
    const startingIndex = lastIndex - postsPerPage;
    let lastPage = Math.ceil(allPostsCount / postsPerPage);

    useEffect(() => {
        postService
            .getPostsCount()
            .then(setAllPostsCount)
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        postService
            .getPaginatedPosts(startingIndex, postsPerPage)
            .then(setPosts)
            .catch((err) => console.log(err));
    }, [currentPage]);

    const decreasePageNumber = () => {
        if (currentPage > 1) setCurrentPage((state) => state - 1);
    };

    const increasePageNumber = () => {
        if (currentPage < lastPage) setCurrentPage((state) => state + 1);
    };

    return (
        <div className={styles.allPosts}>
            <h1>All Posts</h1>

            <Filters />

            <div className={styles.allWrapper}>
                {posts.map((post) => {
                    return <Post key={post._id} {...post} />;
                })}
            </div>

            <Pagination
                currentPage={currentPage}
                decreasePageNumber={decreasePageNumber}
                increasePageNumber={increasePageNumber}
            />
        </div>
    );
}
