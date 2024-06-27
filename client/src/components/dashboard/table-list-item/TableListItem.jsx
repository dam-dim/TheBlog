import { Link } from "react-router-dom";

import parseDate from "../../../utils/dateParser";
import * as postService from "../../../services/postService";

import styles from "./TableListItem.module.css";

export default function TableListItem(props) {
    const onClickDelete = async () => {
        try {
            await props.deletePost(props._id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <tr key={props._id}>
            <td>{props.title}</td>
            <td>{parseDate(props._createdOn)}</td>
            <td>
                {props.editedAt
                    ? parseDate(props.editedAt)
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
