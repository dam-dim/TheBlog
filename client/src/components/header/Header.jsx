import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Header() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <Link to="/">
                    <h1>The Blog</h1>
                </Link>
            </div>

            <div className={styles.navigation}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/all-posts">All Posts</Link>
                    </li>

                    {currentUser.username ? (
                        <>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            {currentUser.email === "admin@gmail.com" && (
                                <li>
                                    <Link to="/admin">Admin Panel</Link>
                                </li>
                            )}
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                            <span
                                style={{
                                    color: "#D3D9D4",
                                    marginLeft: "30px",
                                    border: "1px solid #D3D9D4",
                                    padding: "10px",
                                }}
                            >
                                Welcome, {currentUser.firstName}{" "}
                                {currentUser.lastName}
                            </span>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}
