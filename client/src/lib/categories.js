import * as categoryService from "../services/categoryService";

export const getRandom = async () => {
    const categories = await categoryService.getAll();
    const random = Math.floor(Math.random() * categories.length);
    return categories[random]._id;
};
