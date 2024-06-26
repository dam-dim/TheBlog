import { useState } from "react";

export default function usePersistedState(initialValue) {
    const [auth, setAuth] = useState(() => {
        const current = {
            token: localStorage.getItem("token"),
            username: localStorage.getItem("username"),
            email: localStorage.getItem("email"),
        };

        return current.token ? current : initialValue;
    });

    const setCurrentUser = (username, email, token) => {
        setAuth({ username, email, token });
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
    };

    const removeCurrentUser = () => {
        setAuth({});
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
    };

    return { currentUser: auth, setCurrentUser, removeCurrentUser };
}
