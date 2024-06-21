import { useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import Devider from "../devider/Devider";
import styles from "./Details.module.css";
import { useEffect, useState } from "react";
import * as postService from "../../services/postService";

export default function Details() {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        postService.getOne(postId).then((result) => {
            setPost(result);
        });
        window.scrollTo(0, 0);
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
                        <p>@username</p>
                        <p>Posted on {post.createdAt}</p>
                        <p>Updated on {post.editedAt}</p>
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
