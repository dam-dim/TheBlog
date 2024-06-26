import { useNavigate } from "react-router-dom";

import AuthContext from "./contexts/authContext";
import usePersistedState from "./hooks/usePersistedState";
import * as userService from "./services/userService";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const INIT_VALUES = {
    // username: "",
    // email: "",
    // token: "",
};

function App() {
    const { currentUser, setCurrentUser, removeCurrentUser } =
        usePersistedState(INIT_VALUES);
    const navigate = useNavigate();

    const registerHandler = async (payload) => {
        try {
            const data = {
                username: payload.username,
                password: payload.password,
                email: payload.email,
            };

            await userService.register(data);
            navigate("/login");
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const values = {
        currentUser,
        registerHandler,
        setCurrentUser,
        removeCurrentUser,
    };

    return (
        <>
            <AuthContext.Provider value={values}>
                <Header />
                <Main />
            </AuthContext.Provider>
            <Footer />
        </>
    );
}

export default App;
