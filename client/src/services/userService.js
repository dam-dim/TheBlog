import * as request from "../lib/request";

const BASE_URL = "http://localhost:3030/users";

export const register = async (payload) => {
    try {
        const result = request.post(`${BASE_URL}/register`, payload);
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

export const logout = async () => {
    try {
        const result = await request.get(`${BASE_URL}/logout`);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
