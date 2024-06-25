const BASE_URL = "http://localhost:3030/users";

/**
 * @param payload Object that holds username, email, password
 * @return A promise to be either resolved with the created user with generated _id or rejected with an Error
 */
export const register = async (payload) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(payload),
    });

    const result = await response.json();

    return result;
};

/**
 *
 * @param {*} email
 * @param {*} password
 * @returns
 */
export const login = async (email, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    return result;
};
