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
import Delete from "../delete/Delete";
import CategoryView from "../category-view/CategoryView";

export default function Main() {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:postId/details" element={<Details />} />
                <Route
                    path="/categories/:categoryId"
                    element={<CategoryView />}
                />
                {currentUser.token ? (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/fill" element={<Fill />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/posts/:postId/edit" element={<Edit />} />
                        <Route
                            path="/posts/:postId/delete"
                            element={<Delete />}
                        />
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
