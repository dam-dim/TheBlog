import { Link } from "react-router-dom";

import styles from "./Post.module.css";

export default function Post() {
    return (
        <div className={styles.post}>
            <Link to="/details">
                <div className={styles.firstCol}>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui adipisci minima iusto ratione voluptas, dicta fugiat
                    </h3>
                    <br />

                    <h4>Post Category</h4>
                </div>
                <div>
                    <p>@username</p>
                    <p>19.06.24 20:02</p>
                </div>
            </Link>
        </div>
    );
}
