import { useNavigate } from "react-router-dom";
import styles from "./Category.module.css";

export default function Category(props) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/categories/${props.category._id}`);
    };

    return (
        <div className={styles.category} onClick={onClick}>
            <h3>{props.category.name}</h3>
        </div>
    );
}
