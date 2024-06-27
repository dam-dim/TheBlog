import { useEffect, useState } from "react";

import * as postService from "../services/postService";

export default function usePagination(initialPage, postsPerPage) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [posts, setPosts] = useState([]);
    const [allPostsCount, setAllPostsCount] = useState(0);

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

    return { currentPage, posts, decreasePageNumber, increasePageNumber };
}
