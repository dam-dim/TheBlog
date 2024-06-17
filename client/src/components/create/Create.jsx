import styles from "./Create.module.css";

export default function Create() {
    return (
        <div className={styles.create}>
            <h1>Create a post</h1>
            <form action="" method="POST">
                <div className={styles.fieldsWrapper}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.input}>
                            <label htmlFor="title">Post Title</label>
                            <input type="text" name="title" id="title" />
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="category">Category</label>
                            <input type="text" name="category" id="category" />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="content"></textarea>
                    </div>
                </div>

                <div className={styles.submit}>
                    <input type="submit" id="submit" value="Create" />
                </div>
            </form>
        </div>
    );
}
