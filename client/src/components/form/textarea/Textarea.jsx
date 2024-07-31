import Label from "../label/Label";

/**
 * Textarea Component with label for controlled form
 * @param props class, id, title, placeholder, value, onChange, onBlue, error
 * @returns
 */
export default function Textarea(props) {
    return (
        <div className={props.class}>
            <Label htmlFor={props.id} title={props.title} />
            <textarea
                placeholder={props.placeholder}
                name={props.id}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <p>{props.error}</p>
        </div>
    );
}
