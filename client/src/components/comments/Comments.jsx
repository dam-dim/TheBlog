import { useContext, useEffect, useState } from "react";
import styles from "./Comments.module.css";
import Comment from "./comment/Comment";
import { useParams } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Comments({ post }) {
    const [comment, setComment] = useState("");
    const { postId } = useParams();
    const { currentUser } = useContext(AuthContext);

    const isVisible =
        currentUser?.email === undefined
            ? false
            : currentUser.email !== post.author?.email;

    // it renders 2 times WTF ????

    console.log(isVisible);

    const onChange = (e) => {
        setComment(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(currentUser.email);

        console.log(post.author.email);
    };

    return (
        <>
            <div className={styles.comments}>
                <h2>Comments</h2>
                <Comment />
                <Comment />
                <Comment />
                <Comment />

                {isVisible && (
                    <div className={styles.addComment}>
                        <h3>Add comment</h3>
                        <form onSubmit={onSubmit}>
                            <label htmlFor="comment">Comment</label>
                            <input
                                type="text"
                                name="comment"
                                id="comment"
                                value={comment}
                                onChange={onChange}
                            />
                            <input type="submit" value="Submit comment" />
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}
