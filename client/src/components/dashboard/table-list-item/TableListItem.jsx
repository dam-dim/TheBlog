import { Link, useNavigate } from "react-router-dom";

import parseDate from "../../../utils/dateParser";
import logErrors from "../../../utils/logger";

import styles from "./TableListItem.module.css";

export default function TableListItem(props) {
    const navigate = useNavigate();

    const onClickDelete = async () => {
        try {
            alert("Are you sure?");
            await props.deletePost(props._id);
        } catch (error) {
            logErrors(error);
            navigate("/error");
        }
    };

    return (
        <tr key={props._id}>
            <td>{props.title}</td>
            <td>{parseDate(props._createdOn)}</td>
            <td>
                {props._updatedOn
                    ? parseDate(props._updatedOn)
                    : "Not yet edited  "}
            </td>
            <td>
                <Link
                    className={styles.details}
                    to={`/posts/${props._id}/details`}
                >
                    Details
                </Link>
            </td>
            <td>
                <Link className={styles.edit} to={`/posts/${props._id}/edit`}>
                    Edit
                </Link>
            </td>
            <td>
                <Link className={styles.delete} onClick={onClickDelete}>
                    Delete
                </Link>
            </td>
        </tr>
    );
}
