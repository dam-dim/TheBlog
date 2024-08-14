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

    const onBlur = async () => {
        await validate();
        setFetchError("");
    };

    const validate = async () => {
        for (const key in initialValues) {
            const result = await validator[key](
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

        await validate();

        if (errors.submit === "") {
            try {
                await submitHandler(formValues);
                setFormValues(initialValues);
                setFetchError("");
            } catch (error) {
                setFetchError(error.message);
                setFormValues((state) => {
                    return { ...state, password: "", repPass: "" };
                });
            }
        }
    };

    const onMount = (values) => {
        setFormValues(values);
    };

    return {
        formValues,
        fieldErrors,
        fetchError,
        onChange,
        onBlur,
        onSubmit,
        onMount,
    };
}
