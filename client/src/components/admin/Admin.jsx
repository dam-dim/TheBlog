import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import Fill from "./fill/Fill";
import * as categoryService from "../../services/categoryService";
import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import useForm from "../../hooks/useForm";
import parseDate from "../../utils/dateParser";

const initialValues = {
    category: "",
    submit: "",
};

export default function Admin() {
    const [categories, setCategories] = useState([]);
    const [render, setRender] = useState(0);
    const { formValues, fieldErrors, onChange, onBlur, onSubmit } = useForm(
        submitHandler,
        initialValues
    );

    useEffect(() => {
        categoryService
            .getAllAndSetPostsCount()
            .then(setCategories)
            .catch((err) => console.log(err));
    }, [render]);

    async function submitHandler(values) {
        const newCategory = await categoryService.create(values.category);

        newCategory.postsCount = 0;

        setCategories((prevState) => {
            return [...prevState, newCategory];
        });
    }

    const updateState = () => {
        setRender((state) => !state);
    };

    return (
        <div className={styles.admin}>
            <h1>Admin Panel</h1>

            <div className={styles.categories}>
                <h2>Categories</h2>
                <div className={styles.categoriesWrapper}>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Posts</td>
                                <td>Created On</td>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((currCategory) => (
                                <tr
                                    className={styles.category}
                                    key={currCategory._id}
                                >
                                    <td>{currCategory.name}</td>
                                    <td>{currCategory.postsCount}</td>
                                    <td>
                                        {parseDate(currCategory._createdOn)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.addCategory}>
                    <h3>Add a category</h3>

                    <form className={styles.form} onSubmit={onSubmit}>
                        <Input
                            id="category"
                            value={formValues.category}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={fieldErrors.category}
                            class={styles.input}
                        />
                        <Submit
                            class={styles.submit}
                            error={fieldErrors.submit}
                            buttonText="Create"
                        />
                    </form>
                </div>
            </div>

            <Fill updateState={updateState} />
        </div>
    );
}
