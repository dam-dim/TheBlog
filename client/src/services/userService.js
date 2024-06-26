import * as request from "../lib/request";

const BASE_URL = "http://localhost:3030/users";
const DATA_URL = "http://localhost:3030/data/users";

export const register = async (payload) => {
    try {
        const result = await request.post(`${BASE_URL}/register`, payload);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const login = async (payload) => {
    try {
        const result = await request.post(`${BASE_URL}/login`, payload);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const logout = () => request.get(`${BASE_URL}/logout`);

export const me = () => request.get(`${BASE_URL}/me`);
