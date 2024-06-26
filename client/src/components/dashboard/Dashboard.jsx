import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Dashboard.module.css";
import AuthContext from "../../contexts/authContext";
import * as userService from "../../services/userService";
import * as postService from "../../services/postService";

export default function Dashboard() {
    const { currentUser } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        userService
            .me()
            .then((result) => {
                postService
                    .getByAuthorId(result._id)
                    .then(setMyPosts)
                    .catch((err) => console.log(err.message));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <div className={styles.myPosts}>
                <div className={styles.header}>
                    <h2>My Posts</h2>
                    <div className={styles.createNew}>
                        <Link to="/create">
                            <p>{`Create new post`}</p>
                            <img src="images/add.png" alt="add" />
                        </Link>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Created</th>
                            <th>Edited</th>
                            <th></th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    {myPosts.length === 0 && (
                        <tbody>
                            <tr>
                                <td>No posts yet!</td>
                            </tr>
                        </tbody>
                    )}
                    <tbody>
                        {myPosts.map((myPost) => {
                            return (
                                <tr key={myPost._id}>
                                    <td>{myPost.title}</td>
                                    <td>{myPost._createdOn}</td>
                                    <td>17.06.24 11:58</td>
                                    <td>
                                        <Link
                                            className={styles.details}
                                            to={`/posts/${myPost._id}/details`}
                                        >
                                            Details
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            className={styles.edit}
                                            to={`/posts/${myPost._id}/edit`}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            className={styles.delete}
                                            to={`/posts/${myPost._id}/delete`}
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
