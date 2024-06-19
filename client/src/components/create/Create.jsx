import { useState } from "react";
import styles from "./Create.module.css";
import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import { validator, isValid } from "../../utils/validator";
import { Link } from "react-router-dom";
import Textarea from "../form/textarea/Textarea";

const initialValues = {
    title: "",
    category: "",
    imageUrl: "",
    content: "",
};

export default function Create() {
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldErrors, setFieldErrors] = useState(initialValues);

    const onClickSubmitHandler = () => {
        validate();

        if (isValid.submit()) {
            // TODO: Make a POST request
            const data = {
                title: formValues.title,
                category: formValues.category,
                content: formValues.content,
            };

            setFormValues(initialValues);
        } else {
            //
        }
    };

    const onChangeFieldHandler = (e) => {
        setFormValues((state) => {
            return { ...state, [e.target.name]: e.target.value };
        });
    };

    const onBlur = () => validate();

    const validate = () => {
        for (const key in initialValues) {
            const result = validator[key](formValues[key], formValues.password);
            setFieldErrors((state) => {
                return { ...state, [key]: result };
            });
        }
    };

    return (
        <div className={styles.form}>
            <h1>Create</h1>
            <form action="">
                <div className={styles.header}>
                    <Input
                        placeholder="Post Title"
                        class={styles.input}
                        type="text"
                        id="title"
                        title="Title"
                        value={formValues.title}
                        onChange={onChangeFieldHandler}
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
                        onChange={onChangeFieldHandler}
                        onBlur={onBlur}
                        error={fieldErrors.category}
                    />
                </div>

                <Input
                    placeholder="Post the image link here..."
                    class={styles.input}
                    type="text"
                    id="imageUrl"
                    title="Image URL"
                    value={formValues.imageUrl}
                    onChange={onChangeFieldHandler}
                    onBlur={onBlur}
                    error={fieldErrors.imageUrl}
                />

                <Textarea
                    placeholder="Post content"
                    class={styles.content}
                    id="content"
                    title="Content"
                    value={formValues.content}
                    onChange={onChangeFieldHandler}
                    onBlur={onBlur}
                    error={fieldErrors.content}
                />

                <Submit
                    class={styles.submit}
                    buttonText="Create"
                    error={fieldErrors.submit}
                    onClick={onClickSubmitHandler}
                />
            </form>
            {/* <div className={styles.link}>
                <p>
                    If You don't have have an account, You can register{" "}
                    <Link to="/register">here.</Link>
                </p>
            </div> */}
        </div>
    );
}
