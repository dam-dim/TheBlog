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

export const getLatestPosts = async () => {
    const query = new URLSearchParams({
        offset: "0",
        pageSize: "3",
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

export const edit = async (payload) => {
    payload = {
        ...payload,
        owner: localStorage.getItem("username"),
    };

    try {
        const result = await request.put(BASE_URL, payload);
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
                category: categories.getRandom(),
            });
        } catch (error) {
            throw error;
        }
    }
};
