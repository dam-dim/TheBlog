import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../../../services/userService";
import logErrors from "../../../utils/logger";

import styles from "./Profile.module.css";

export default function Profile(props) {
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        userService
            .getCurrentUserData()
            .then(setCurrentUser)
            .catch((err) => {
                logErrors(err);
                navigate("/error");
            });
    }, []);

    return (
        <div className={styles.profile}>
            <h2>Profile</h2>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Posts Count</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {currentUser.firstName} {currentUser.lastName}
                        </td>

                        <td>
                            <p>{currentUser.email}</p>
                        </td>

                        <td>
                            <p>{props.myPosts.length}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
