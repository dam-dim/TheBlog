/**
 *
 * @param {*} props
 * @returns
 */
export default function Submit(props) {
    if (props.fetchError !== "") {
        alert(props.fetchError);
    }
    return (
        <div className={props.class}>
            <p>{props.error}</p>
            <input type="submit" value={props.buttonText} />
        </div>
    );
}
