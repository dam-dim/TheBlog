import { Link } from "react-router-dom";
import styles from "./RecentListItem.module.css";

export default function RecentListItem() {
    return (
        <div className={styles.card}>
            <img
                src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg"
                alt=""
            />
            <div className={styles.cardDetails}>
                <h3>Post Title</h3>
                <p>Post Category</p>

                <div className={styles.creator}>
                    <p>@username</p>
                    <p>16.06.24 14:20</p>
                </div>
                <Link to="/details">Read more</Link>
            </div>
        </div>
    );
}
