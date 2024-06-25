import { useState } from "react";

import { validator } from "../utils/validator";

/**
 *
 * @param {*} initialValues
 * @returns
 */
export default function useForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues);
    const [fieldErrors, setFieldErrors] = useState(initialValues);

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

    return [
        formValues,
        setFormValues,
        fieldErrors,
        onChangeFieldHandler,
        onBlur,
        validate,
    ];
}
