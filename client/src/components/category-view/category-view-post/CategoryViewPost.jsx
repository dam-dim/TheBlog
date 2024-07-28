import styles from "./CategoryViewPost.module.css";

export default function CategoryViewPost(props) {
    return (
        <div>
            <h1>{props.post.title}</h1>
        </div>
    );
}
