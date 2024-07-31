import * as categories from "../lib/categories";
import * as request from "../lib/request";

const BASE_URL = "http://localhost:3030/data/posts";

/**
 * Creates the post and includes _id, createdAt, editedAt fields
 * @param payload Object that holds the data for the post {title, category, imageUrl, content}
 * @returns Promise either to be resolved with the newly created post with _id or rejected with an error
 */
export const create = async (payload) => {
    payload = {
        ...payload,
    };

    try {
        const result = await request.post(BASE_URL, payload);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * @returns An array with all the posts
 */
export const getAll = async () => {
    const query = new URLSearchParams({
        load: `author=_ownerId:users`,
    });
    try {
        const result = await request.get(`${BASE_URL}?${query}`);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getPostsCount = async () => {
    try {
        const result = await request.get(`${BASE_URL}?count`);
        return result;
    } catch (error) {
        throw error;
    }
};

// TODO: split into separate functions for filtering and paginating
export const getPaginatedPosts = async (skip, take, filters) => {
    let query = new URLSearchParams();

    if (filters.search) query.append("where", `title LIKE "${filters.search}"`);
    if (filters.category)
        query.append("where", `category LIKE "${filters.category}"`);
    if (filters.titleSort === "desc") query.append("sortBy", "title desc");
    if (filters.dateSort === "desc") query.append("sortBy", "_createdOn desc");

    query.append("offset", skip);
    query.append("pageSize", take);
    query.append("load", "author=_ownerId:users");

    query = query.toString().replaceAll("+", "%20");

    try {
        const result = await request.get(`${BASE_URL}?${query}`);
        return result;
    } catch (error) {
        throw error;
    }
};

/**
 *
 * @param postId Id of the post that needs to be fetched
 * @returns An object representing the post
 */
export const getPostById = async (postId) => {
    const query = new URLSearchParams({
        where: `_id="${postId}"`,
        load: `author=_ownerId:users`,
    });

    try {
        const result = await request.get(`${BASE_URL}?${query}`);
        return result[0];
    } catch (error) {
        throw error;
    }
};

// TODO: fix spelling
export const getPostWithoutAuthot = async (postId) => {
    try {
        const result = await request.get(`${BASE_URL}/${postId}`);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getByAuthorId = async (authorId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${authorId}"`,
    });

    try {
        const result = await request.get(`${BASE_URL}?${query}`);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getLatestPosts = async (count) => {
    const query = new URLSearchParams({
        offset: "0",
        pageSize: count,
        load: "author=_ownerId:users",
    });
    try {
        const result = await request.get(
            `${BASE_URL}?sortBy=_createdOn desc&${query}`
        );
        return result;
    } catch (error) {
        throw error;
    }
};

export const edit = async (postId, payload) => {
    try {
        const result = await request.put(`${BASE_URL}/${postId}`, payload);
        return result;
    } catch (error) {
        throw error;
    }
};

export const remove = async (postId) => {
    try {
        await request.remove(`${BASE_URL}/${postId}`);
    } catch (error) {
        throw error;
    }
};

/**
 * Fills the DB with dummy posts
 * @returns Promise to be resolved or rejected with an error
 */
export const fill = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dummyPosts = await response.json();

    for (const dummyPost of dummyPosts) {
        try {
            await create({
                title: dummyPost.title,
                content: dummyPost.body.repeat(10),
                imageUrl: `https://picsum.photos/1920/1080?random=${dummyPosts.indexOf(
                    dummyPost
                )}`,
                category: await categories.getRandom(),
            });
        } catch (error) {
            throw error;
        }
    }
};

export const getPostsByCategoryId = async (categoryId) => {
    const query = new URLSearchParams({
        where: `category="${categoryId}"`,
        load: "author=_ownerId:users",
    });

    try {
        const result = await request.get(`${BASE_URL}?${query}`);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getPostsCountByAuthorId = async (authorId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${authorId}"`,
    });

    try {
        const result = await request.get(`${BASE_URL}?${query}&count`);
        return result;
    } catch (error) {
        throw error;
    }
};
