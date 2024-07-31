import { useEffect, useState } from "react";

import * as userService from "../../../services/userService";

import styles from "./Profile.module.css";

export default function Profile() {
    const [currentUser, setCurrentUser] = useState({});

    // TODO: currentUser can be lifted in the Dashboard Component and there it can be loaded with info
    // TODO: after adding first and last name and gender and profile pic add them here

    useEffect(() => {
        userService
            .getCurrentUserData()
            .then(setCurrentUser)
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.profile}>
            <h2>Profile</h2>

            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>
                            <p>Email: </p>
                        </td>

                        <td>
                            <p>{currentUser.email}</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Number of posts:</p>
                        </td>
                        <td>
                            <p>{currentUser.postsCount}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            {console.log(currentUser)}
        </div>
    );
}
