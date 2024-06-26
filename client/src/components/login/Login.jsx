import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import styles from "./Login.module.css";

import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";

const initialValues = {
    password: "",
    email: "",
    submit: "",
};

export default function Login() {
    const { loginHandler, fireError } = useContext(AuthContext);

    const { formValues, fieldErrors, fetchError, onChange, onBlur, onSubmit } =
        useForm(loginHandler, initialValues);

    return (
        <>
            <div className={styles.form}>
                <h1>Login</h1>

                <form onSubmit={onSubmit}>
                    <Input
                        placeholder="e.g. ivancho123"
                        class={styles.input}
                        type="text"
                        id="email"
                        title="Email"
                        value={formValues.email}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={fieldErrors.email}
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

                    <Submit
                        class={styles.submit}
                        buttonText="Login"
                        error={fieldErrors.submit}
                    />
                </form>
                <div className={styles.link}>
                    <p>
                        If You don't have have an account, You can register{" "}
                        <Link to="/register">here.</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
