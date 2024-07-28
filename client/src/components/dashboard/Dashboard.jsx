import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Dashboard.module.css";
import * as userService from "../../services/userService";
import * as postService from "../../services/postService";
import TableListItem from "./table-list-item/TableListItem";

export default function Dashboard() {
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

    const deletePost = async (postId) => {
        try {
            await postService.remove(postId);
            setMyPosts((state) => state.filter((post) => post._id !== postId));
        } catch (error) {
            throw error;
        }
    };

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
                        {myPosts.map((myPost) => (
                            <TableListItem
                                key={myPost._id}
                                {...myPost}
                                deletePost={deletePost}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
