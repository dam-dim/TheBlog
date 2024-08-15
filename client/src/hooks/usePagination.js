import { useEffect, useState } from "react";

import * as postService from "../services/postService";
import useFilters from "./useFilters";
import { useNavigate } from "react-router-dom";
import logErrors from "../utils/logger";

export default function usePagination(initialPage, postsPerPage) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [posts, setPosts] = useState([]);
    const [allPostsCount, setAllPostsCount] = useState(0);
    const { filters, onChangeFilter } = useFilters();
    const navigate = useNavigate();

    const lastIndex = currentPage * postsPerPage;
    const startingIndex = lastIndex - postsPerPage;
    let lastPage = Math.ceil(allPostsCount / postsPerPage);

    useEffect(() => {
        const setPagination = async () => {
            const postsCount = await postService.getPostsCount();
            setAllPostsCount(postsCount);

            const paginatedPosts = await postService.getPaginatedPosts(
                startingIndex,
                postsPerPage,
                filters
            );
            setPosts(paginatedPosts);
        };

        setPagination().catch((err) => {
            logErrors(err);
            navigate("/error");
        });
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
