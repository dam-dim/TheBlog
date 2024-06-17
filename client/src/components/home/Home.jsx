import Recent from "../recent-list/Recent";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.welcome}></div>
            <Recent />
        </div>
    );
}
