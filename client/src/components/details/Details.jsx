import Comments from "../comments/Comments";
import Devider from "../devider/Devider";
import styles from "./Details.module.css";

export default function Details() {
    return (
        <div className={styles.details}>
            <img
                src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg"
                alt=""
            />
            <div className={styles.content}>
                <div className={styles.creator}>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                        alt=""
                    />
                    <div className={styles.creatorDetails}>
                        <p>@username</p>
                        <p>Posted on June 16, 2024 at 17:10</p>
                        <p>Updated on June 16, 2024 at 17:10</p>
                    </div>
                </div>

                <h1>Post Title</h1>
                <h3>Post Category</h3>
                <p className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit error soluta similique sit, architecto
                    dignissimos aperiam blanditiis ullam, facere consequatur
                    totam, debitis quo corrupti omnis. Placeat, culpa aliquid
                    dolor eveniet, hic nobis quas tempora sunt excepturi atque
                    ea quaerat. Eaque nam autem recusandae natus voluptatem
                    repellendus laudantium cupiditate laborum ipsum, inventore
                    facere at ullam quasi, deleniti odio aspernatur itaque
                    voluptates tenetur. Facere dolores nostrum reprehenderit
                    quisquam quis facilis fugiat rem, iste quae et maiores est
                    error sed assumenda veritatis quo. Autem enim quod ipsum
                    tenetur non assumenda perferendis repellendus ullam mollitia
                    aliquid. Harum iusto assumenda eos officia nemo, aut
                    consequatur! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Reprehenderit error soluta similique sit,
                    architecto dignissimos aperiam blanditiis ullam, facere
                    consequatur totam, debitis quo corrupti omnis. Placeat,
                    culpa aliquid dolor eveniet, hic nobis quas tempora sunt
                    excepturi atque ea quaerat. Eaque nam autem recusandae natus
                    voluptatem repellendus laudantium cupiditate laborum ipsum,
                    inventore facere at ullam quasi, deleniti odio aspernatur
                    itaque voluptates tenetur. Facere dolores nostrum
                    reprehenderit quisquam quis facilis fugiat rem, iste quae et
                    maiores est error sed assumenda veritatis quo. Autem enim
                    quod ipsum tenetur non assumenda perferendis repellendus
                    ullam mollitia aliquid. Harum iusto assumenda eos officia
                    nemo, aut consequatur! Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Reprehenderit error soluta
                    similique sit, architecto dignissimos aperiam blanditiis
                    ullam, facere consequatur totam, debitis quo corrupti omnis.
                    Placeat, culpa aliquid dolor eveniet, hic nobis quas tempora
                    sunt excepturi atque ea quaerat. Eaque nam autem recusandae
                    natus voluptatem repellendus laudantium cupiditate laborum
                    ipsum, inventore facere at ullam quasi, deleniti odio
                    aspernatur itaque voluptates tenetur. Facere dolores nostrum
                    reprehenderit quisquam quis facilis fugiat rem, iste quae et
                    maiores est error sed assumenda veritatis quo. Autem enim
                    quod ipsum tenetur non assumenda perferendis repellendus
                    ullam mollitia aliquid. Harum iusto assumenda eos officia
                    nemo, aut consequatur!
                </p>
            </div>
            <Devider />
            <Comments />
        </div>
    );
}
