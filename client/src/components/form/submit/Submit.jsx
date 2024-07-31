/**
 * Submit Component for controlled/uncontrolled form
 * @param props class, error, buttonText
 * @returns
 */
export default function Submit(props) {
    return (
        <div className={props.class}>
            <p>{props.error}</p>
            <input type="submit" value={props.buttonText} />
        </div>
    );
}
