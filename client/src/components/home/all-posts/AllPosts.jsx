import usePagination from "../../../hooks/usePagination";

import styles from "./AllPosts.module.css";

import Filters from "./filters/Filters";
import Post from "./post/Post";
import Pagination from "../../pagination/Pagination";
import useFilters from "../../../hooks/useFilters";
import { useEffect } from "react";

const START_PAGE = 1;
const POSTS_PER_PAGE = 10;

export default function AllPosts() {
    const {
        currentPage,
        posts,
        filters,
        onChangeFilter,
        decreasePageNumber,
        increasePageNumber,
    } = usePagination(START_PAGE, POSTS_PER_PAGE);

    return (
        <div className={styles.allPosts}>
            <h1>All Posts</h1>

            <Filters filters={filters} onChange={onChangeFilter} />

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
