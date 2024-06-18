import { Link } from "react-router-dom";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
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
                    <tbody>
                        <tr>
                            <td>Post Title</td>
                            <td>17.06.24 11:58</td>
                            <td>17.06.24 11:58</td>
                            <td>
                                <Link className={styles.details} to="/details">
                                    Details
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.edit} to="/edit">
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.delete} to="/delete">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Post Title</td>
                            <td>17.06.24 11:58</td>
                            <td>17.06.24 11:58</td>
                            <td>
                                <Link className={styles.details} to="/details">
                                    Details
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.edit} to="/edit">
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.delete} to="/delete">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Post Title</td>
                            <td>17.06.24 11:58</td>
                            <td>17.06.24 11:58</td>
                            <td>
                                <Link className={styles.details} to="/details">
                                    Details
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.edit} to="/edit">
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.delete} to="/delete">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Post Title</td>
                            <td>17.06.24 11:58</td>
                            <td>17.06.24 11:58</td>
                            <td>
                                <Link className={styles.details} to="/details">
                                    Details
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.edit} to="/edit">
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.delete} to="/delete">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
