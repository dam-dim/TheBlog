import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

import * as commentService from "../../services/commentService";

import styles from "./Comments.module.css";

import Comment from "./comment/Comment";
import Input from "../form/input/Input";
import Submit from "../form/submit/Submit";
import logErrors from "../../utils/logger";

const initialValues = {
    comment: "",
    submit: "",
};

export default function Comments({ post }) {
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { formValues, fieldErrors, onChange, onBlur, onSubmit } = useForm(
        onSubmitHandler,
        initialValues
    );

    useEffect(() => {
        commentService
            .getCommentsByPostId(postId)
            .then(setComments)
            .catch((err) => {
                logErrors(err);
                navigate("/error");
            });
    }, [postId]);

    const isVisible =
        currentUser?.token === undefined
            ? false
            : currentUser.email !== post.author?.email;

    async function onSubmitHandler() {
        // TODO: error handling if there is no current user

        const payload = {
            content: formValues.comment,
            postId: post._id,
            username: currentUser.username,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
        };

        const newComment = await commentService.create(payload);

        setComments((prevState) => [...prevState, newComment]);
    }

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
                            username={comment.username}
                            firstName={comment.firstName}
                            lastName={comment.lastName}
                        />
                    ))
                ) : (
                    <h3>No comments yet</h3>
                )}

                {isVisible && (
                    <div className={styles.addComment}>
                        <h3>Add comment</h3>
                        <form onSubmit={onSubmit}>
                            <Input
                                class={styles.input}
                                id="comment"
                                placeholder="Comment"
                                type="text"
                                value={formValues.comment}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={fieldErrors.comment}
                            />
                            <Submit
                                class={styles.submit}
                                error={fieldErrors.submit}
                                buttonText="Submit"
                            />
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}
