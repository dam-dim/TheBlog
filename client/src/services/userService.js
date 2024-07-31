import * as request from "../lib/request";
import { getPostsCountByAuthorId } from "./postService";

const BASE_URL = "http://localhost:3030/users";

export const register = (payload) =>
    request.post(`${BASE_URL}/register`, payload);

export const login = (payload) => request.post(`${BASE_URL}/login`, payload);

export const logout = () => request.get(`${BASE_URL}/logout`);

export const me = () => request.get(`${BASE_URL}/me`);

export const getCurrentUserData = async () => {
    let currentUser = {};

    try {
        currentUser = await request.get(`${BASE_URL}/me`);
        currentUser.postsCount = await getPostsCountByAuthorId(currentUser._id);

        return currentUser;
    } catch (error) {
        throw error;
    }
};
