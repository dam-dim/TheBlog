import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import AuthContext from "./contexts/authContext";

import Devider from "./components/devider/Devider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    const [auth, setAuth] = useState({});

    const values = {
        auth,
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
