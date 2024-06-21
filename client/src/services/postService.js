const BASE_URL = "http://localhost:3030/jsonstore/posts";

/**
 * @param payload Object that holds the data for the post {title, category, imageUrl, content}
 * @returns Promise either to be resolved with the newly created post with _id or rejected with an error
 */
export const create = async (payload) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        return result;
    } catch (error) {
        throw new Error(error);
    }
};

export const getAll = () => {
    //
};

/**
 * Fills the DB with dummy posts
 * @returns Promise to be resolved or rejected with an error
 */
export const fill = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dummyPosts = await response.json();

    for (const dummyPost of dummyPosts) {
        await create({
            title: dummyPost.title,
            content: dummyPost.body,
            imageUrl: `https://picsum.photos/1920/1080?random=${dummyPosts.indexOf(
                dummyPost
            )}`,
            category: "Drama",
        });
    }
};
