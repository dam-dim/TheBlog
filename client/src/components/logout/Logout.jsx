import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService";

import AuthContext from "../../contexts/authContext";
import logErrors from "../../utils/logger";

export default function Logout() {
    const { removeCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        userService
            .logout()
            .then(() => {
                removeCurrentUser();
                navigate("/");
            })
            .catch((err) => {
                logErrors(err);
                navigate("/error");
            });
    }, []);

    return null;
}
