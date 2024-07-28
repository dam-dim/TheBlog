import * as request from "../lib/request";

const BASE_URL = "http://localhost:3030/data/categories";

export const create = async (name) => {
    try {
        const payload = {
            name,
        };

        const result = await request.post(BASE_URL, payload);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getAll = async () => {
    try {
        const result = request.get(BASE_URL);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getCategoryById = async (categoryId) => {
    try {
        const query = new URLSearchParams({
            where: `_id="${categoryId}"`,
        });

        const result = await request.get(`${BASE_URL}?${query}`);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getCategoryByName = async (name) => {
    try {
        const query = new URLSearchParams({
            where: `name="${name}"`,
        });

        const result = await request.get(`${BASE_URL}?${query}`);
        return result;
    } catch (error) {
        throw error;
    }
};
