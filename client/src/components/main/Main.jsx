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
import Logout from "../logout/Logout";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import CategoryView from "../category-view/CategoryView";
import AllPosts from "../all-posts/AllPosts";
import Admin from "../admin/Admin";

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
                <Route path="/all-posts" element={<AllPosts />} />
                {currentUser.token ? (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/create" element={<Create />} />
                        {currentUser.email === "admin@gmail.com" && (
                            <Route path="/admin" element={<Admin />} />
                        )}

                        <Route path="/logout" element={<Logout />} />
                        <Route path="/posts/:postId/edit" element={<Edit />} />
                        {/* <Route
                            path="/posts/:postId/delete"
                            element={<Delete />}
                        /> */}
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
