import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import * as userService from "../../services/userService";

import styles from "./Register.module.css";

import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";

const initialValues = {
    username: "",
    password: "",
    repPass: "",
    email: "",
    submit: "",
};

export default function Register() {
    const { setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { formValues, fieldErrors, onChange, onBlur, onSubmit } = useForm(
        registerHandler,
        initialValues
    );

    async function registerHandler(payload) {
        try {
            const data = {
                username: payload.username,
                password: payload.password,
                email: payload.email,
            };

            await userService.register(data);
            navigate("/login");
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className={styles.form}>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <Input
                    placeholder="e.g. ivancho123"
                    class={styles.input}
                    type="text"
                    id="username"
                    title="Username"
                    value={formValues.username}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={fieldErrors.username}
                />
                <Input
                    class={styles.input}
                    type="password"
                    id="password"
                    title="Password"
                    value={formValues.password}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={fieldErrors.password}
                />
                <Input
                    class={styles.input}
                    type="password"
                    id="repPass"
                    title="Repeat Password"
                    value={formValues.repPass}
                    onChange={onChange}
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
                    onChange={onChange}
                    onBlur={onBlur}
                    error={fieldErrors.email}
                />
                <Submit
                    class={styles.submit}
                    buttonText="Register"
                    error={fieldErrors.submit}
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
