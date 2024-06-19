import { Route, Routes } from "react-router-dom";

import styles from "./Main.module.css";

import Home from "../home/Home";
import Login from "../login/Login";
import Details from "../details/Details";
import Error from "../error/Error";
import Register from "../register/Register";
import Dashboard from "../dashboard/Dashboard";
import Create from "../create/Create";
import Edit from "../edit/Edit";

export default function Main() {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/details" element={<Details />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}
