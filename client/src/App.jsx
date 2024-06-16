import { BrowserRouter } from "react-router-dom";
import Devider from "./components/devider/Devider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Devider />
            <Main />
            <Devider />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
