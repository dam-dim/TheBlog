export default function Submit(props) {
    return (
        <div className={props.class}>
            <p>{props.error}</p>
            <input
                type="button"
                value={props.buttonText}
                onClick={props.onClick}
            />
        </div>
    );
}
