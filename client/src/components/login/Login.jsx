import { useState } from "react";
import styles from "./Login.module.css";
import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import { validator, isValid } from "../../utils/validator";
import { Link } from "react-router-dom";

const initialValues = {
    username: "",
    password: "",
};

export default function Login() {
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldErrors, setFieldErrors] = useState(initialValues);

    const onClickSubmitHandler = () => {
        validate();

        if (isValid.submit()) {
            // TODO: Make a POST request
            const data = {
                username: formValues.username,
                password: formValues.password,
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
            <h1>Login</h1>
            <form action="">
                <Input
                    placeholder="e.g. ivancho123"
                    class={styles.input}
                    type="text"
                    id="username"
                    title="Username"
                    value={formValues.username}
                    onChange={onChangeFieldHandler}
                    onBlur={onBlur}
                    error={fieldErrors.username}
                />
                <Input
                    class={styles.input}
                    type="password"
                    id="password"
                    title="Password"
                    value={formValues.password}
                    onChange={onChangeFieldHandler}
                    onBlur={onBlur}
                    error={fieldErrors.password}
                />

                <Submit
                    class={styles.submit}
                    buttonText="Login"
                    error={fieldErrors.submit}
                    onClick={onClickSubmitHandler}
                />
            </form>
            <div className={styles.link}>
                <p>
                    If You don't have have an account, You can register{" "}
                    <Link to="/register">here.</Link>
                </p>
            </div>
        </div>
    );
}
