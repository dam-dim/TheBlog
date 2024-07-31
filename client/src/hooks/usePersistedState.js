import { useState } from "react";

export default function usePersistedState(initialValue) {
    const [auth, setAuth] = useState(() => {
        const current = {
            username: localStorage.getItem("username"),
            firstName: localStorage.getItem("firstName"),
            lastName: localStorage.getItem("lastName"),
            email: localStorage.getItem("email"),
            token: localStorage.getItem("token"),
        };

        return current.token ? current : initialValue;
    });

    const setCurrentUser = (username, firstName, lastName, email, token) => {
        setAuth({ username, firstName, lastName, email, token });
        localStorage.setItem("username", username);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
    };

    const removeCurrentUser = () => {
        setAuth({});
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("email");
    };

    return { currentUser: auth, setCurrentUser, removeCurrentUser };
}
