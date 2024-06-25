import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        logoutHandler();
    }, []);

    return null;
}
