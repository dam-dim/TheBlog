import Recent from "../recent-list/Recent";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <Recent />
        </div>
    );
}
