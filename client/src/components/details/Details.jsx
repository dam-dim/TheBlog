import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as categoryService from "../../services/categoryService";
import * as postService from "../../services/postService";

import parseDate from "../../utils/dateParser";

import styles from "./Details.module.css";

import Comments from "../comments/Comments";
import Devider from "../devider/Devider";

export default function Details() {
    const [post, setPost] = useState({});
    const { postId } = useParams();
    const [category, setCategory] = useState("");

    useEffect(() => {
        const setCategoryAsync = async (postObj) => {
            const result = await categoryService.getCategoryById(
                postObj.category
            );
            setCategory(result[0]);
            return postObj;
        };

        postService
            .getPostById(postId)
            .then(setCategoryAsync)
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
                        {post._updatedOn && (
                            <p>Updated on {parseDate(post._updatedOn)}</p>
                        )}
                    </div>
                </div>

                <h1>{post.title}</h1>
                <h3>{category.name}</h3>
                <p className={styles.description}>{post.content}</p>
            </div>
            <Devider />
            <Comments post={post} />
        </div>
    );
}
