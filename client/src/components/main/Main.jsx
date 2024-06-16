import { Route, Routes } from "react-router-dom";

import styles from "./Main.module.css";

import Home from "../home/Home";
import Login from "../login/Login";
import Details from "../details/Details";
import Error from "../error/Error";

export default function Main() {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}
