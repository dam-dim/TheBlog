import { useEffect, useState } from "react";

import * as postService from "../services/postService";
import useFilters from "./useFilters";

export default function usePagination(initialPage, postsPerPage) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [posts, setPosts] = useState([]);
    const [allPostsCount, setAllPostsCount] = useState(0);
    const { filters, onChangeFilter } = useFilters();

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
            .getPaginatedPosts(startingIndex, postsPerPage, filters)
            .then(setPosts)
            .catch((err) => console.log(err));
    }, [currentPage, filters]);

    const decreasePageNumber = () => {
        if (currentPage > 1) setCurrentPage((state) => state - 1);
    };

    const increasePageNumber = () => {
        if (currentPage < lastPage) setCurrentPage((state) => state + 1);
    };

    return {
        currentPage,
        posts,
        filters,
        onChangeFilter,
        decreasePageNumber,
        increasePageNumber,
    };
}
