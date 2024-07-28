import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import * as categoryService from "../../services/categoryService";

import useForm from "../../hooks/useForm";

import styles from "./Edit.module.css";

import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import Textarea from "../form/textarea/Textarea";
import parseDate from "../../utils/dateParser";
import Select from "../form/select/Select";

const INIT_VALUES = {
    title: "",
    category: "",
    imageUrl: "",
    content: "",
};

export default function Edit() {
    const [post, setPost] = useState(INIT_VALUES);
    const { postId } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryService
            .getAll()
            .then(setCategories)
            .catch((err) => console.log(err));
    }, []);

    const { formValues, fieldErrors, onChange, onBlur, onSubmit, onMount } =
        useForm(onSubmitHandler, {
            ...INIT_VALUES,
            submit: "",
        });

    useEffect(() => {
        postService
            .getPostWithoutAuthot(postId)
            .then((result) => {
                setPost(result);
                onMount(result);
            })
            .catch((err) => console.log(err));
    }, [postId]);

    async function onSubmitHandler(payload) {
        try {
            const data = {
                ...post,
                title: payload.title,
                category: payload.category,
                imageUrl: payload.imageUrl,
                content: payload.content,
            };
            await postService.edit(postId, data);
            navigate(`/posts/${postId}/details`);
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className={styles.edit}>
            <h1>Edit a post</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.fieldsWrapper}>
                    <div className={styles.inputWrapper}>
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

                        <Select
                            title="Category"
                            id="category"
                            placeholder="Post Category"
                            class={styles.input}
                            values={categories}
                            onChange={onChange}
                            onBlur={onBlur}
                            error={fieldErrors.category}
                            selected={formValues.category}
                        />
                    </div>

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
                </div>

                <Submit
                    class={styles.submit}
                    buttonText="Edit"
                    error={fieldErrors.submit}
                />
            </form>
        </div>
    );
}
