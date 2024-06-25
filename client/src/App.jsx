import { BrowserRouter, useNavigate } from "react-router-dom";

import AuthContext from "./contexts/authContext";
import usePersistedState from "./hooks/usePersistedState";
import * as userService from "./services/userService";

import Devider from "./components/devider/Devider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const INIT_VALUES = {
    username: "",
    email: "",
    token: "",
};

function App() {
    const { auth, setCurrentUser, removeCurrentUser } =
        usePersistedState(INIT_VALUES);
    const navigate = useNavigate();

    const loginHandler = async (payload) => {
        const result = await userService.login(payload.email, payload.password);

        setCurrentUser(result.username, result.email, result.accessToken);

        navigate("/");
    };

    const logoutHandler = () => {
        removeCurrentUser();
        navigate("/");
    };

    const values = {
        auth,
        loginHandler,
        logoutHandler,
    };

    return (
        <AuthContext.Provider value={values}>
            <Header />
            <Main />

            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
