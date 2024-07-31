import * as request from "../lib/request";

const BASE_URL = "http://localhost:3030/data/comments";

export const create = async (payload) => {
    try {
        const result = await request.post(BASE_URL, payload);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getAll = async () => {
    try {
        const result = await request.get(BASE_URL);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getCommentsByPostId = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`,
    });

    try {
        const result = await request.get(`${BASE_URL}?${query}`);

        return result;
    } catch (error) {
        throw error;
    }
};
