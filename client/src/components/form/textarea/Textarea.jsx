import Label from "../label/Label";

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
