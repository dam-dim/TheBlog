import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <div className={styles.myPosts}>
                <h2>My Posts</h2>
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
                                <a href="#">Details</a>
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                            <td>
                                <a href="#">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Post Title</td>
                            <td>17.06.24 11:58</td>
                            <td>17.06.24 11:58</td>
                            <td>
                                <a href="#">Details</a>
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                            <td>
                                <a href="#">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Post Title</td>
                            <td>17.06.24 11:58</td>
                            <td>17.06.24 11:58</td>
                            <td>
                                <a href="#">Details</a>
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                            <td>
                                <a href="#">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Post Title</td>
                            <td>17.06.24 11:58</td>
                            <td>17.06.24 11:58</td>
                            <td>
                                <a href="#">Details</a>
                            </td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                            <td>
                                <a href="#">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
