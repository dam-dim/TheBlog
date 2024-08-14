import styles from "./Filters.module.css";

export default function Filters({ filters, onChange }) {
    return (
        <div className={styles.filters}>
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
                        <option value="desc">Newest</option>
                        <option value="asc">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
