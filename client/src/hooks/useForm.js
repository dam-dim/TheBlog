import { useState } from "react";

import { validator } from "../utils/validator";

export default function useForm(submitHandler, initialValues) {
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldErrors, setFieldErrors] = useState(initialValues);

    const onChange = (e) => {
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

    const onSubmit = (e) => {
        e.preventDefault();

        validate();

        submitHandler(formValues);

        setFormValues(initialValues);
    };

    return {
        formValues,
        fieldErrors,
        onChange,
        onBlur,
        onSubmit,
    };
}
