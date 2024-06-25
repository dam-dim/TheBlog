import { useState } from "react";

export default function usePersistedState(initialValue) {
    const [auth, setAuth] = useState(initialValue);

    const setCurrentUser = (username, email, token) => {
        setAuth({ username, email, token });
        localStorage.setItem("currentUser", { username, email, token });
    };

    const removeCurrentUser = () => {
        setAuth(initialValue);
        localStorage.removeItem("currentUser");
    };

    return { auth, setCurrentUser, removeCurrentUser };
}
