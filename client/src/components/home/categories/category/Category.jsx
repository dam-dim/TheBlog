export default function Category(props) {
    return (
        <div>
            <a href={`/categories/${props.category._id}`}>
                {props.category.name}
            </a>
        </div>
    );
}
