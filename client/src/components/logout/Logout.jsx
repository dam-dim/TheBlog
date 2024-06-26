import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService";

import AuthContext from "../../contexts/authContext";

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
                console.log(err);
                navigate("/");
            });
    }, []);

    return null;
}
