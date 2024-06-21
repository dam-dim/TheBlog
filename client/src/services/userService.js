import bcrypt from "bcrypt";

const BASE_URL = "http://localhost:3030/jsonstore/users";

/**
 * @param payload Object that holds username, email, password
 * @return A promise to be either resolved with the created user with generated _id or rejected with an Error
 */
export const create = async (payload) => {
    // TODO: use bcrypt for hashing the password maybe ?

    const response = await fetch(BASE_URL, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(payload),
    });

    const result = await response.json();

    console.log(result);
};
