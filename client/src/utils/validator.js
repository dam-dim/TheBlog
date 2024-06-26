export const errors = {
    username: "",
    email: "",
    password: "",
    repPass: "",
    title: "",
    category: "",
    imageUrl: "",
    content: "",
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

const validateTitle = (...props) => {
    console.log(props);
    const title = props[0].trim();

    if (title === "") return (errors.title = "Title is required!");

    if (title.length < 5)
        return (errors.title = "Title length must be at least 5 characters!");

    return (errors.title = "");
};

const validateCategory = (...props) => {
    const category = props[0].trim();

    if (category === "") return (errors.category = "Category is required!");

    if (category.length < 5)
        return (errors.category =
            "Category length must be at least 5 characters!");

    return (errors.category = "");
};

const validateImageUrl = (...props) => {
    const imageUrl = props[0].trim();

    if (imageUrl === "") return (errors.imageUrl = "Image URL is required!");

    return (errors.imageUrl = "");
};

const validateContent = (...props) => {
    const content = props[0].trim();

    if (content === "") return (errors.content = "Content is required!");

    if (content.length < 5)
        return (errors.content =
            "Content length must be at least 5 characters!");
    return (errors.content = "");
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
    title: validateTitle,
    category: validateCategory,
    imageUrl: validateImageUrl,
    content: validateContent,
    submit: validateSubmit,
};

export const isValid = {
    submit: () => errors.submit === "",
    username: () => errors.username === "",
    password: () => errors.password === "",
    repPass: () => errors.repPass === "",
    email: () => errors.email === "",
    title: () => errors.title === "",
    category: () => errors.category === "",
    imageUrl: () => errors.imageUrl === "",
    content: () => errors.content === "",
};
