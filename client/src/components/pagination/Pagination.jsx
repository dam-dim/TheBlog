import styles from "./Pagination.module.css";

export default function Pagination({
    currentPage,
    decreasePageNumber,
    increasePageNumber,
}) {
    return (
        <div className={styles.pagination}>
            <p onClick={decreasePageNumber}>{"<"}</p>
            {"\t\t\t"}

            <b>{currentPage}</b>

            {"\t\t\t"}
            <p onClick={increasePageNumber}>{">"}</p>
        </div>
    );
}
