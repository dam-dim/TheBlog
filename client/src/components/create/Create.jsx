import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as postService from "../../services/postService";
import * as categoryService from "../../services/categoryService";

import styles from "./Create.module.css";

import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import Textarea from "../form/textarea/Textarea";
import useForm from "../../hooks/useForm";
import Select from "../form/select/Select";

const initialValues = {
    title: "",
    category: "",
    imageUrl: "",
    content: "",
    category: "",
    submit: "",
};

export default function Create() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryService
            .getAll()
            .then(setCategories)
            .catch((err) => console.log(err));
    }, []);

    const { formValues, fieldErrors, onChange, onBlur, onSubmit } = useForm(
        onCreateSubmit,
        initialValues
    );

    async function onCreateSubmit(payload) {
        try {
            const data = {
                title: payload.title,
                category: payload.category,
                imageUrl: payload.imageUrl,
                content: payload.content,
            };
            await postService.create(data);
            navigate("/");
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className={styles.form}>
            <h1>Create</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.header}>
                    <Input
                        placeholder="Post Title"
                        class={styles.input}
                        type="text"
                        id="title"
                        title="Title"
                        value={formValues.title}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={fieldErrors.title}
                    />
                    <Input
                        placeholder="Post Category"
                        class={styles.input}
                        type="text"
                        id="category"
                        title="Category"
                        value={formValues.category}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={fieldErrors.category}
                    />
                </div>

                <Select
                    title="Category"
                    id="category"
                    placeholder="Post Category"
                    class={styles.select}
                    values={categories}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={fieldErrors.category}
                />

                <Input
                    placeholder="Post the image link here..."
                    class={styles.input}
                    type="text"
                    id="imageUrl"
                    title="Image URL"
                    value={formValues.imageUrl}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={fieldErrors.imageUrl}
                />

                <Textarea
                    placeholder="Post content"
                    class={styles.content}
                    id="content"
                    title="Content"
                    value={formValues.content}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={fieldErrors.content}
                />

                <Submit
                    class={styles.submit}
                    buttonText="Create"
                    error={fieldErrors.submit}
                />
            </form>
        </div>
    );
}
