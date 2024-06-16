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
                <h3>Card Title</h3>
                <p>Category</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    ipsam ipsum suscipit sapiente nulla nobis tempora,
                    voluptatem iusto possimus qui minima iure aut numquam
                    recusandae, quisquam maxime vero. Unde, minima.
                </p>
                <p>16/6/2024 14:20</p>
                <p>@username</p>
                <Link to="/details">Read more</Link>
            </div>
        </div>
    );
}
