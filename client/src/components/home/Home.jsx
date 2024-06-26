import AllPosts from "./all-posts/AllPosts";
import Recent from "./recent-list/Recent";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.image}>
                <img
                    src="https://www.tanium.com/wp-content/uploads/WideNet-hero-scaled-e1715882718193.jpg"
                    alt=""
                />
            </div>
            <Recent />
            <AllPosts />
        </div>
    );
}
