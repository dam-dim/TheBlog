import styles from "./Comment.module.css";

export default function Comment() {
    return (
        <div className={styles.comment}>
            <div className={styles.commentImage}>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                />
            </div>

            <div className={styles.commentContent}>
                <h4>@username on June 16, 2024</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem doloribus libero illum dicta voluptate magni saepe
                    veritatis tempore illo esse veniam a vel magnam, rerum
                    beatae cum incidunt perspiciatis. Veritatis ex totam
                    possimus. Dicta dolorum eligendi maxime modi exercitationem
                    quibusdam culpa reiciendis alias iste officiis cumque, optio
                    voluptates non nam!
                </p>
            </div>
        </div>
    );
}
