import { useEffect, useState } from "react";
import styles from "./AllPosts.module.css";
import Filters from "./filters/Filters";
import Post from "./post/Post";
import * as postService from "../../services/postService";
import Pagination from "../pagination/Pagination";

export default function AllPosts() {
    const postsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then((result) => {
            setPosts(result);
        });
    }, []);

    const lastIndex = currentPage * postsPerPage;
    const startingIndex = lastIndex - postsPerPage;
    let lastPage = Math.ceil(posts.length / postsPerPage);

    const currentPosts = posts.slice(startingIndex, lastIndex);

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
                {currentPosts.map((post) => {
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
