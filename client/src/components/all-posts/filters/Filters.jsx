import styles from "./Filters.module.css";

export default function Filters({ filters, onChange }) {
    return (
        <div className={styles.filters}>
            <div className={styles.categoryFilter}>
                <label htmlFor="category">Category</label>
                <select
                    defaultValue="all"
                    name="category"
                    id="category"
                    onChange={onChange}
                >
                    <option value="">All</option>
                    <option value="Pop Culture">Pop Culture</option>
                    <option value="DIY Projects">DIY Projects</option>
                    <option value="Health & Wellness">Health & Wellness</option>
                    <option value="Tech Trends">Tech Trends</option>
                    <option value="Travel Diaries">Travel Diaries</option>
                </select>
            </div>

            <div className={styles.search}>
                <label htmlFor="search">Search</label>
                <input
                    type="search"
                    name="search"
                    id="search"
                    onChange={onChange}
                />
            </div>

            <div className={styles.sort}>
                <p>Sort by: </p>

                <div className={styles.titleSort}>
                    <label htmlFor="titleSort">Title</label>
                    <select name="titleSort" id="titleSort" onChange={onChange}>
                        <option value=""></option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>

                <div className={styles.dateSort}>
                    <label htmlFor="dateSort">Date</label>
                    <select name="dateSort" id="dateSort" onChange={onChange}>
                        <option value=""></option>
                        <option value="asc">Newest</option>
                        <option value="desc">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
