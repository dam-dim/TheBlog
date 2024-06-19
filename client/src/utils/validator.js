const errors = {
    username: "",
    email: "",
    password: "",
    repPass: "",
    submit: "",
};

const validateUsername = (...props) => {
    const username = props[0].trim();
    if (username.trim() === "")
        return (errors.username = "Username is required!");
    if (username.trim().length < 3)
        return (errors.username = "Username must be at least 3 characters!");

    return (errors.username = "");
};

const validatePassword = (...props) => {
    const password = props[0].trim();
    if (password === "") return (errors.password = "Password is required!");
    if (password.length < 3) {
        return (errors.password = "Password must be at least 3 characters!");
    }

    return (errors.password = "");
};

const validateRepPass = (...props) => {
    const repPass = props[0].trim();
    const password = props[1].trim();

    if (repPass === "")
        return (errors.repPass = "Repeat Password is required!");

    if (password !== repPass)
        return (errors.repPass = "Passwords don't match!");

    return (errors.repPass = "");
};

const validateEmail = (...props) => {
    const email = props[0].trim();
    const regex =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "") {
        return (errors.email = "Email is required!");
    }
    if (!regex.test(email) || typeof email !== "string") {
        return (errors.email = "Please enter a valid email!");
    }

    return (errors.email = "");
};

const validateSubmit = (...props) => {
    for (const key in errors) {
        if (key === "submit") continue;
        if (errors[key] !== "")
            return (errors.submit = "Please fill all the required fields!");
    }

    return (errors.submit = "");
};

export const validator = {
    username: validateUsername,
    password: validatePassword,
    repPass: validateRepPass,
    email: validateEmail,
    submit: validateSubmit,
};

export const isValid = {
    submit: () => errors.submit === "",
    username: () => errors.username === "",
    password: () => errors.password === "",
    repPass: () => errors.repPass === "",
    email: () => errors.email === "",
};

export const validateOne = (field, ...props) => {
    validator[field](props);
};

export const validateAll = () => {
    //
};
