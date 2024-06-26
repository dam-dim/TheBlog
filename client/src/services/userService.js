import * as request from "../utils/request";

const BASE_URL = "http://localhost:3030/users";

/**
 * @param payload Object that holds username, email, password
 * @return A promise to be either resolved with the created user with generated _id or rejected with an Error
 */
export const register = async (payload) => {
    try {
        const result = request.post(`${BASE_URL}/register`, payload);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * @param {*} email
 * @param {*} password
 * @returns
 */
export const login = async (payload) => {
    try {
        const result = await request.post(`${BASE_URL}/login`, payload);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
