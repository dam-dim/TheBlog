import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as commentService from "../../services/commentService";

import styles from "./Comments.module.css";

import Comment from "./comment/Comment";

export default function Comments({ post }) {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        commentService
            .getCommentsByPostId(postId)
            .then(setComments)
            .catch((err) => console.log(err));
    }, [postId]);

    const isVisible =
        currentUser?.email === undefined
            ? false
            : currentUser.email !== post.author?.email;

    const onChange = (e) => {
        setComment(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            content: "asdsadsa",
            postId: post._id,
        };

        const newComment = await commentService.create(payload);

        setComments((prevState) => [...prevState, newComment]);
        setComment("");
    };

    return (
        <>
            <div className={styles.comments}>
                <h2>Comments</h2>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <Comment
                            key={comment._id}
                            ownerId={comment._ownerId}
                            content={comment.content}
                            createdOn={comment._createdOn}
                        />
                    ))
                ) : (
                    <h3>No comments yet</h3>
                )}

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
