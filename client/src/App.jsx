import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import AuthContext from "./contexts/authContext";
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

    const values = {
        auth,
        setCurrentUser,
        removeCurrentUser,
    };

    return (
        <AuthContext.Provider value={values}>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
