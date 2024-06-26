import { useState } from "react";

import { validator, errors } from "../utils/validator";

export default function useForm(submitHandler, initialValues) {
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldErrors, setFieldErrors] = useState(() => {
        const emptyErrors = {};

        for (const key in initialValues) {
            emptyErrors[key] = "";
        }

        return emptyErrors;
    });
    const [fetchError, setFetchError] = useState("");

    const onChange = (e) => {
        setFormValues((state) => {
            return { ...state, [e.target.name]: e.target.value };
        });
    };

    const onBlur = () => validate();

    const validate = () => {
        for (const key in initialValues) {
            console.log(formValues[key]);
            const result = validator[key](
                formValues[key],
                formValues?.password
            );
            setFieldErrors((state) => {
                return { ...state, [key]: result };
            });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        validate();

        if (errors.submit === "") {
            try {
                await submitHandler(formValues);
                setFetchError("");
                setFormValues(initialValues);
            } catch (error) {
                setFetchError(error.message);
                console.log(error.message);
                setFormValues((state) => {
                    return { ...state, password: "", repPass: "" };
                });
            }
        }
    };

    return {
        formValues,
        fieldErrors,
        fetchError,
        onChange,
        onBlur,
        onSubmit,
    };
}
