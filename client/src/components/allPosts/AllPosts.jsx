import styles from "./AllPosts.module.css";
import Post from "./post/Post";

export default function AllPosts() {
    return (
        <div className={styles.allPosts}>
            <h1>All Posts</h1>
            <div className={styles.filters}>
                <div className={styles.categoryFilter}>
                    <label htmlFor="category">Category</label>
                    <select defaultValue="all" name="category" id="category">
                        <option value="all">All</option>
                        <option value="cars">Cars</option>
                        <option value="movies">Movies</option>
                        <option value="philosophy">Philosophy</option>
                        <option value="webDev">Web Dev</option>
                    </select>
                </div>

                <div className={styles.search}>
                    <label htmlFor="search">Search</label>
                    <input type="search" />
                </div>

                <div className={styles.sort}>
                    <p>Sort by: </p>

                    <div className={styles.titleSort}>
                        <label htmlFor="titleSort">Title</label>
                        <select name="titleSort" id="">
                            <option value=""></option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>

                    <div className={styles.dateSort}>
                        <label htmlFor="dateSort">Date</label>
                        <select name="dateSort" id="">
                            <option value=""></option>
                            <option value="ascending">Newest</option>
                            <option value="descending">Oldest</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.allWrapper}>
                <Post />
                <Post />
                <Post />
            </div>

            <div className={styles.pagination}>
                <a href="">{"|<"}</a>
                <a href="">{"<"}</a>
                {"\t\t\t"}
                <a href="">1</a>
                <a href="">
                    <b>2</b>
                </a>
                <a href="">3</a>
                {"\t\t\t"}
                <a href="">{">"}</a>
                <a href="">{">|"}</a>
            </div>
        </div>
    );
}
