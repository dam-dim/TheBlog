import * as request from "../lib/request";
import * as postService from "./postService";

const BASE_URL = "http://localhost:3030/data/categories";

/**
 * Creates a new category.
 * @param name Name for the category.
 * @returns Returns a promise, which after resolving returns the newly created category object.
 * @throws Error.
 */
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

/**
 * Async function to fetch all the categories objects
 * @returns A promise. After resolving returns an array with all the categories objects.
 * @throws Error
 */
export const getAll = async () => {
    try {
        const result = request.get(BASE_URL);
        return result;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetches the category upon given id of category
 * @param categoryId Category id is as '_id' in the database
 * @returns A promise. After resolving gives the category object in an array
 * @throws Error
 */
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

/**
 * Fetches a category by making a query
 * @param {*} name
 * @returns A promise. After resolving gives an array with one element - the category obj.
 * @throws Error
 */
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

export const isUnique = async (categoryName) => {
    try {
        const result = await getCategoryByName(categoryName);

        return result.length === 0;
    } catch (error) {
        throw error;
    }
};

export const getAllAndSetPostsCount = async () => {
    try {
        const result = await request.get(BASE_URL);

        result.forEach(async (category) => {
            const count = await postService.getPostsCountByCategoryId(
                category._id
            );
            category.postsCount = count;
        });

        console.log(result);

        return result;
    } catch (error) {
        throw error;
    }
};
