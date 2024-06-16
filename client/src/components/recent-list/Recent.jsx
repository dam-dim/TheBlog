import RecentListItem from "./recent-list-item/RecentListItem";
import styles from "./Recent.module.css";

export default function Recent() {
    return (
        <div className={styles.recent}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.content}>
                <RecentListItem />
                <RecentListItem />
                <RecentListItem />
            </div>
        </div>
    );
}
