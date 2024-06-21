import * as categories from "../lib/categories";

const BASE_URL = "http://localhost:3030/jsonstore/posts";

/**
 * Creates the post and includes _id, createdAt, editedAt fields
 * @param payload Object that holds the data for the post {title, category, imageUrl, content}
 * @returns Promise either to be resolved with the newly created post with _id or rejected with an error
 */
export const create = async (payload) => {
    const date = new Date();

    payload = {
        ...payload,
        createdAt: date.toISOString(),
        editedAt: date.toISOString(),
    };

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        return result;
    } catch (error) {
        throw new Error(error);
    }
};

/**
 * @returns An array with all the posts
 */
export const getAll = async () => {
    try {
        const response = await fetch(BASE_URL);
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
};

/**
 *
 * @param postId Id of the post that needs to be fetched
 * @returns An object representing the post
 */
export const getOne = async (postId) => {
    try {
        const response = await fetch(`${BASE_URL}/${postId}`);
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
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
        await create({
            title: dummyPost.title,
            content: dummyPost.body.repeat(20),
            imageUrl: `https://picsum.photos/1920/1080?random=${dummyPosts.indexOf(
                dummyPost
            )}`,
            category: categories.getRandom(),
        });
    }
};
