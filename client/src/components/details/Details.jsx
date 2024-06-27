import { useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import Devider from "../devider/Devider";
import styles from "./Details.module.css";
import { useEffect, useState } from "react";
import * as postService from "../../services/postService";
import parseDate from "../../utils/dateParser";

export default function Details() {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        postService
            .getPostById(postId)
            .then(setPost)
            .catch((err) => console.log(err));
    }, [postId]);

    return (
        <div className={styles.details}>
            <img src={post.imageUrl} alt="" />
            <div className={styles.content}>
                <div className={styles.creator}>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                        alt=""
                    />
                    <div className={styles.creatorDetails}>
                        <p>@{post.author?.username}</p>
                        <p>Posted on {parseDate(post._createdOn)}</p>
                        {post.editedAt && (
                            <p>Updated on {parseDate(post.editedAt)}</p>
                        )}
                    </div>
                </div>

                <h1>{post.title}</h1>
                <h3>{post.category}</h3>
                <p className={styles.description}>{post.content}</p>
            </div>
            {/* <Devider /> */}
            {/* <Comments /> */}
        </div>
    );
}
