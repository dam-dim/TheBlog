import { Route, Routes } from "react-router-dom";

import styles from "./Main.module.css";

import Home from "../home/Home";
import Login from "../login/Login";
import Details from "../details/Details";
import PathError from "../pathError/PathError";
import Register from "../register/Register";
import Dashboard from "../dashboard/Dashboard";
import Create from "../create/Create";
import Edit from "../edit/Edit";
import Fill from "../fill/Fill";
import Logout from "../logout/Logout";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Main() {
    const { auth } = useContext(AuthContext);
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:postId/details" element={<Details />} />
                {auth.token !== "" ? (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/edit" element={<Edit />} />
                        <Route path="/fill" element={<Fill />} />
                        <Route path="/logout" element={<Logout />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
                <Route path="*" element={<PathError />} />
            </Routes>
        </div>
    );
}
