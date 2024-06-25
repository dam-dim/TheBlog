import { useState } from "react";
import { Link } from "react-router-dom";

import { validator, isValid } from "../../utils/validator";
import * as userService from "../../services/userService";

import styles from "./Login.module.css";

import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";

const initialValues = {
    username: "",
    password: "",
    email: "",
};

export default function Login() {
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldErrors, setFieldErrors] = useState(initialValues);

    const onClickSubmitHandler = async () => {
        validate();

        if (isValid.submit()) {
            // TODO: Make a POST request
            const data = {
                username: formValues.username,
                password: formValues.password,
                email: formValues.email,
            };

            const result = await userService.login(data.email, data.password);
            console.log(result);

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
                    id="email"
                    title="Email"
                    value={formValues.email}
                    onChange={onChangeFieldHandler}
                    onBlur={onBlur}
                    error={fieldErrors.email}
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
