import AuthContext from "./contexts/authContext";
import usePersistedState from "./hooks/usePersistedState";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    const { currentUser, setCurrentUser, removeCurrentUser } =
        usePersistedState({});

    const values = {
        currentUser,
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
