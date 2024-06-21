import { useState } from "react";
import styles from "./Register.module.css";
import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import { validator, isValid } from "../../utils/validator";
import { Link } from "react-router-dom";
import * as userService from "../../services/userService";

const initialValues = {
    username: "",
    password: "",
    repPass: "",
    email: "",
    submit: "",
};

export default function Register() {
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldErrors, setFieldErrors] = useState(initialValues);

    const onClickSubmitHandler = async () => {
        validate();

        if (isValid.submit()) {
            // TODO: Make a POST request
            const data = {
                username: formValues.username,
                email: formValues.email,
                password: formValues.password,
            };

            await userService.create(data);

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
            <h1>Register</h1>
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
                <Input
                    class={styles.input}
                    type="password"
                    id="repPass"
                    title="Repeat Password"
                    value={formValues.repPass}
                    onChange={onChangeFieldHandler}
                    onBlur={onBlur}
                    error={fieldErrors.repPass}
                />
                <Input
                    placeholder="e.g. ivancho@abv.bg"
                    class={styles.input}
                    type="text"
                    id="email"
                    title="Email"
                    value={formValues.email}
                    onChange={onChangeFieldHandler}
                    onBlur={onBlur}
                    error={fieldErrors.email}
                />
                <Submit
                    class={styles.submit}
                    buttonText="Register"
                    error={fieldErrors.submit}
                    onClick={onClickSubmitHandler}
                />
            </form>
            <div className={styles.link}>
                <p>
                    If You already have have an account, You can login{" "}
                    <Link to="/login">here.</Link>
                </p>
            </div>
        </div>
    );
}
