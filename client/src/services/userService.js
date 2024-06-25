const BASE_URL = "http://localhost:3030/users";

/**
 * @param payload Object that holds username, email, password
 * @return A promise to be either resolved with the created user with generated _id or rejected with an Error
 */
export const register = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 *
 * @param {*} email
 * @param {*} password
 * @returns
 */
export const login = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
