import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import Fill from "./fill/Fill";
import * as categoryService from "../../services/categoryService";
import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import useForm from "../../hooks/useForm";
import { getPostsCountByCategoryId } from "../../services/postService";

const initialValues = {
    category: "",
};

export default function Admin() {
    const [categories, setCategories] = useState([]);
    const { formValues, fieldErrors, onChange, onBlur, onSubmit } = useForm(
        submitHandler,
        initialValues
    );

    useEffect(() => {
        categoryService
            .getAllAndSetPostsCount()
            .then(setCategories)
            .catch((err) => console.log(err));
    }, []);

    async function submitHandler(values) {
        const isUnique = await categoryService.isUnique(values.category);

        if (isUnique) {
            const newCategory = await categoryService.create(values.category);

            setCategories((prevState) => {
                return [...prevState, newCategory];
            });
        }
    }

    return (
        <div className={styles.admin}>
            <h1>Admin Panel</h1>

            <Fill />

            <div>
                {categories.map((currCategory) => (
                    <div key={currCategory._id}>
                        <p>Name: {currCategory.name}</p>
                        <p>Posts in that category: {currCategory.postsCount}</p>
                        <p>Created: {currCategory._createdOn}</p>
                        <br></br>
                    </div>
                ))}
            </div>

            <div>
                <form onSubmit={onSubmit}>
                    <Input
                        id="category"
                        value={formValues.category}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={fieldErrors.category}
                    />
                    <Submit error={fieldErrors.submit} buttonText="Create" />
                </form>
            </div>
        </div>
    );
}
